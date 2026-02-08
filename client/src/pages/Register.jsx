import { useEffect, useState } from 'react';
import {QRCodeCanvas} from "qrcode.react";
import gsap from 'gsap';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpiderWebBackground from '@/components/SpiderWebBackground';
import { Form, Input, Select, message, Steps, Card, } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const Register = ({selectedPass, onBack}) => {
  
  if (!selectedPass) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Please select a pass first.
      </div>
    );
  };

  const amount = Number(selectedPass.amount);
  const eventType = selectedPass.key;

  const [referralCode, setReferralCode] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [formValues, setFormValues]= useState({});
  const [loading, setLoading] = useState(false);

  const UPI_ID = "Q301963269@ybl";

  const payeeName= encodeURIComponent("CSEA - GCT Coimbatore");
  const upiLink =
    amount > 0
      ? `upi://pay?pa=${UPI_ID}&pn=${payeeName}&am=${amount}&cu=INR`
      : "";

  const [paymentImage, setPaymentImage] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      '.register-section',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power2.out' }
    );
  }, [currentStep]);

  const handleSubmit = async () => {
    try {
      const value= await form.validateFields([
         "usedReferralCode",
          "transactionId"
      ]); 
      if(!paymentImage){
        message.error("Please upload payment screenshot");
        return;
      }     
      setLoading(true);

      const finalData={
        ...formValues,
        ...value,
        eventType,
        timestamp: new Date().toISOString(),
      }
      const formData= new FormData();
      Object.entries(finalData).forEach(([key, value])=>{
        formData.append(key, value);
      });
      
      formData.append("paymentProof",paymentImage);

      const res= await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",
        body: formData
      });
      
      
      const data=await res.json();
      console.log(data);
      setReferralCode(data.referralCode);
      message.success("Registration successfull!");
      setCurrentStep(2);
    } 
    catch {
      message.error('Please fill all required fields');
    } 
    finally {
      setLoading(false);
    }
  };

  const steps = [
    { title: 'Personal Info', icon: <UserOutlined /> },
    { title: 'Payment', icon: <CheckCircleOutlined /> },
    { title: 'Confirmation', icon: <CheckCircleOutlined /> },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <SpiderWebBackground />
      <Navbar />

      <section className="pt-32 pb-8 relative">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-foreground text-5xl md:text-7xl mb-4">
              <span className="text-primary">Register</span> Now
            </h1>
            <p className="text-muted-foreground text-lg">
              Join hundreds of participants and be part of the most epic tech fest!
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 pt-10 pb-50">
        <div className="container mx-auto px-5 max-w-4xl">
            <Steps
              current={currentStep}
              items={steps.map((step) => ({
                title: <span className="text-foreground">{step.title}</span>,
                icon: step.icon,
              }))}
              className="custom-steps"
            />

          <Form 
            form={form}
            layout="vertical"
            size="large"
            className='mt-8'
          >
        
            {currentStep === 0 && (
              <div className="register-section card-spider p-8">
                
                <h2 className="font-display text-3xl text-foreground mb-8">
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Form.Item
                      name="name"
                      label={<span className="text-foreground">Full Name</span>}
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input
                        prefix={<UserOutlined className="text-muted-foreground" />}
                        placeholder="Peter Parker"
                        className="input-spider"
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label={<span className="text-foreground">Email Address</span>}
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' },
                      ]}
                    >
                      <Input
                        prefix={<MailOutlined className="text-muted-foreground" />}
                        placeholder="spider@web.com"
                        className="input-spider"
                      />
                    </Form.Item>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Form.Item
                      name="phone"
                      label={<span className="text-foreground">Phone Number</span>}
                      rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                      <Input
                        prefix={<PhoneOutlined className="text-muted-foreground" />}
                        placeholder="+91 98765 43210"
                        className="input-spider"
                      />
                    </Form.Item>

                    <Form.Item
                      name="college"
                      label={<span className="text-foreground">College/University</span>}
                      rules={[{ required: true, message: 'Please enter your college' }]}
                    >
                      <Input
                        placeholder="Your College Name"
                        className="input-spider"
                      />
                    </Form.Item>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Form.Item
                      name="department"
                      label={<span className="text-foreground">Department</span>}
                      rules={[{ required: true, message: 'Please select your department' }]}
                    >
                      <Select
                        placeholder="Select Department"
                        className="w-full"
                      >
                        <Option value="cse">Computer Science</Option>
                        <Option value="it">Information Technology</Option>
                        <Option value="ece">Electronics & Communication</Option>
                        <Option value="eee">Electrical Engineering</Option>
                        <Option value="mech">Mechanical Engineering</Option>
                        <Option value="civil">Civil Engineering</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name="year"
                      label={<span className="text-foreground">Year of Study</span>}
                      rules={[{ required: true, message: 'Please select your year' }]}
                    >
                      <Select
                        placeholder="Select Year"
                        className="w-full"
                      >
                        <Option value="1">1st Year</Option>
                        <Option value="2">2nd Year</Option>
                        <Option value="3">3rd Year</Option>
                        <Option value="4">4th Year</Option>
                      </Select>
                    </Form.Item>
                </div>

                <div className="pt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={()=>onBack&&onBack()}
                      className="px-5 py-2 rounded-lg border border-primary/40 text-primary
                                hover:bg-primary hover:text-white transition-all duration-300 font-semibold uppercase"
                    >
                      Change Pass
                    </button>
                    <button
                      type="button"
                      onClick={async()=>{
                        const values= await form.validateFields([
                          "name",
                          "email",
                          "phone",
                          "college",
                          "department",
                          "year",
                        ]);
                        setFormValues(prev=>({...prev, ...values}));
                        setCurrentStep(1);
                      }}
                      className="btn-spider rounded-lg"
                    >
                      Next: Payment
                    </button>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="register-section card-spider p-8 space-y-8">
                <h2 className="font-display text-3xl text-foreground text-center">
                  Complete Payment
                </h2>

                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="text-center rounded-2xl  border border-border p-6 shadow-lg">
                    {amount >0 &&(
                      <QRCodeCanvas
                        value={upiLink}
                        size={220}
                        bgColor="#ffffff"
                        fgColor="#000000"
                      />
                    )}
                    <Card className="card-spider border border-border">
                      <p className="text-xs text-muted-foreground">UPI ID</p>
                      <p className="text-lg font-mono font-semibold text-primary">
                        {UPI_ID}
                      </p>
                    </Card>
                      
                    <p className="text-muted-foreground mt-3">
                      Scan & Pay ₹{amount}
                    </p>
                  </div>

                  <div className="space-y-4">
                      <Form.Item
                        name="usedReferralCode"
                        label={<span className="text-foreground">Referral Code (optional)</span>}
                      >
                        <Input
                          placeholder="Enter referral code (if any)"
                          className="input-spider"
                        />
                      </Form.Item>
                      <Form.Item
                        name="transactionId"
                        label={<span className="text-foreground">UPI Transaction ID</span>}
                        rules={[{ required: true, message: 'Enter transaction ID' }]}
                      >
                        <Input placeholder="Eg: 1234567890" />
                      </Form.Item>

                      <Form.Item
                        name="paymentProof"
                        label={<span className="text-foreground">Upload Payment Screenshot</span>}
                      >
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setPaymentImage(e.target.files[0])}
                        />
                      </Form.Item>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button

                    onClick={() => setCurrentStep(0)}
                    className="btn-spider-outline rounded-lg"
                  >
                    Back
                  </button>

                  <button
                    disabled={amount <=0}
                    onClick={handleSubmit}
                    className="btn-spider rounded-lg disabled:opacity-50"
                  >
                    {loading?"Processing....":"Confirm Payment"}
                  </button>
                </div>
              </div>
            )}       
          </Form> 

          {currentStep === 2 && (
            <div className="register-section card-spider p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                <CheckCircleOutlined className="text-5xl text-primary" />
              </div>
              <h2 className="font-display text-4xl text-foreground mb-4">
                Registration <span className="text-primary">Complete!</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                Thank you for registering for InfoQuest'26! <br/><span className=''>A confirmation email has been sent to your registered email address.</span>
              </p>
              <div className="card-spider bg-secondary/50 p-6 max-w-md mx-auto mb-6">
                <p className="text-muted-foreground text-sm mb-1">
                  Your Referral Code
                </p>
                <p className="text-3xl font-bold tracking-widest text-primary">
                  {referralCode}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Save this code for future reference
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Event Date: <span className="text-primary">March 15-16, 2026</span>
              </p>
            </div>
          )}

        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Register;
