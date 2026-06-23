import React, { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''});
  const [sent, setSent] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setSent(true);
    setTimeout(()=> setSent(false), 2000);
  }

  return (
    <section id="contact" className="container py-12">
      <h2 className="text-2xl font-semibold">Contact us</h2>
      <p className="text-slate-500 mt-2">Have questions? Send us a message and we'll get back shortly.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required aria-label="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="p-3 rounded-lg border" placeholder="Your name" />
        <input required aria-label="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="p-3 rounded-lg border" placeholder="Email address" />
        <textarea required aria-label="Message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} className="p-3 rounded-lg border md:col-span-2" rows={6} placeholder="How can we help?" />

        <div className="md:col-span-2 flex items-center justify-end">
          <button className="btn-primary" type="submit">{sent? 'Sent' : 'Send message'}</button>
        </div>
      </form>
    </section>
  )
}
