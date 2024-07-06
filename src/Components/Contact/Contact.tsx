import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

const Contact = () => {
  const form = useRef();
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [disabled, setDisabled] = useState(true);
  const [bgColor, setBgColor] = useState("#24252D");



  useEffect(() => {
    if(name.length > 2 && email.includes('@') && message.length > 2 ){
      setDisabled(false);
      setBgColor("#00CCBB");
    }
  }, [name, email, message]);

const serviceId ='service_o8xr4lb'
const templateId ='template_9hcbzv8'
const publicKey='0Rihr9k34EsXKko85'

  const templateParams = {
    from_name: name,
    from_email: email,
   to_name:'Kunal Prajapati',
    message: message,
  };

  const sendEmail = (e:any) => {
    e.preventDefault();
   

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response)=> {
        enqueueSnackbar('Message Sent Successfully', { variant: 'success' });
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
      enqueueSnackbar('Message Sent Failed', { variant: 'error' });
    });
  };

  return (
      
      <div>
        
      <section className="container w-full pt-24 pb-6 mx-auto" id="contact">
        <div className="flex items-center gap-x-4">
          <h2 className="flex items-center text-2xl font-bold text-white gap-x-2 dark:text-gray-700">
          <span className="text-pink-500 rounded backdrop-blur ">03.</span>Contact Me</h2>
          <div className="relative top-[2px] h-[1px] flex-grow animate-bounce  dark:bg-neutral-950/10 bg-white/20"></div>
        </div>
        <div className="grid gap-6 pt-12 text-center text-white dark:text-gray-700">
          <h3 className="text-3xl sm:text-4xl">Get in touch with me</h3>
          <p className="text-center">
            Want to talk about your project ?<br />Just fill out the form below and I’ll get back to you as soon as I can.
          </p>
        </div>
        <form onSubmit={sendEmail}  className="mx-auto mt-12 flex rounded-lg dark:text-gray-700 dark:border-[1px] dark:border-pink-300 text-white flex-col gap-x-6 gap-y-4  dark:bg-white/70 p-6 outline outline-1 outline-neutral-500/30 backdrop-blur  bg-neutral-900/70 dark:outline-neutral-200/10 md:w-full">
          <div className="grid w-full gap-6 md:grid-cols-2">
            <div className="flex flex-col w-full gap-y-2">
              <label className="font-medium indent-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="w-full rounded-md border-0 bg-transparent p-2.5 ring-1 ring-neutral-500/40 transition-all dark:focus:bg-white/60 focus:ring-pink-400 focus:outline-none focus:bg-neutral-900/70"
                placeholder=""
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <label className="font-medium indent-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="w-full rounded-md border-0 bg-transparent p-2.5 ring-1 ring-neutral-500/40 transition-all dark:focus:bg-white/60 focus:ring-pink-400 focus:outline-none focus:bg-neutral-900/70"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               
              />
            </div>
            
           
          </div>
          <div className="flex flex-col w-full h-full gap-y-2">
            <label className="font-medium indent-1" htmlFor="messsage">
              Messsage
            </label>
            <textarea
              id="messsage"
              className="f peer rounded-md h-[13.3rem] border-0 bg-transparent p-2.5 leading-7 tracking-wider ring-1 ring-neutral-500/40 dark:focus:bg-white/60 focus:ring-pink-400 focus:outline-none focus:bg-neutral-900/70"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center self-end gap-x-4">
            <button type='submit' className="flex h-[2.6rem] w-[8.2rem] items-center justify-center gap-x-2 rounded text-primary  ring-1 ring-pink-400 backdrop-blur transition hover:bg-pink-600/90 hover:text-white hover:ring-pink-400 focus:ring-pink-400 false">
              Submit
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center my-10'>

        <p className='font-medium text-white dark:text-gray-700'>© 2024 - Kunal Prajapati</p>
        </div>
      </section>
      </div>
  );
};

export default Contact;
