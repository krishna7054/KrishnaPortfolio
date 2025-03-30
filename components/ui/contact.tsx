"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function ContactComponent() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  })

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      })
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

    // Replace with your Formspree endpoint
    fetch("https://formspree.io/f/xnnpbgdq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Something went wrong")
      })
      .then(() => {
        handleServerResponse(true, "Thank you for your message. I'll get back to you soon!")
      })
      .catch((error) => {
        handleServerResponse(false, error.message)
      })
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 md:px-6 lg:px-24">
      <div className="grid grid-cols-1  gap-8  lg:grid-cols-2 ">
        <div className="motion-preset-blur-right  ">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-orange-300 mb-8 text-lg">
            Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Connect with me</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:krishnaku089@gmail.com"
                className="flex items-center space-x-3 text-emerald-300 hover:text-red-300 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>krishnaku089@gmail.com</span>
              </a>
              <a
                href="https://github.com/krishna7054"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-emerald-300 hover:text-red-300 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/krishna7054</span>
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-kumar-rgipt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-emerald-300 hover:text-red-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/krishna-kumar-rgipt</span>
              </a>
              <a
                href="https://x.com/Krishna59031477"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-emerald-300 hover:text-red-300 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span>twitter.com/Krishna59031477</span>
              </a>
            </div>
          </div>
        </div>

        <Card className="bg-black text-white border border-gray-700 motion-preset-pop motion-duration-1500">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription className="text-orange-300">Fill out the form below to get in touch with me.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleOnSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={inputs.name}
                  onChange={handleOnChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="_replyto"
                  value={inputs.email}
                  onChange={handleOnChange}
                  required
                  placeholder="Your email address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  value={inputs.subject}
                  onChange={handleOnChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={inputs.message}
                  onChange={handleOnChange}
                  required
                  placeholder="Your message"
                  className="min-h-[120px]"
                />
              </div>

              <Button size="lg" variant="destructive" type="submit" className="w-full cursor-pointer hover:" disabled={status.submitting}>
                {status.submitting ? "Sending..." : "Send Message"}
              </Button>

              {status.info.error && <div className="text-red-500 text-sm mt-2">Error: {status.info.msg}</div>}

              {!status.info.error && status.info.msg && (
                <div className="text-green-500 text-sm mt-2">{status.info.msg}</div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
     
    </div>
  )
}

