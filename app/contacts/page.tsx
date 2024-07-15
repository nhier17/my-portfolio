"use client"

import React from 'react'
import {
   Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from '@/components/ui/card';
import { Button } from "@/components/ui/button"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CiMail } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io";
import { FaPhone,FaLinkedin, FaGithub } from "react-icons/fa";


const Contacts = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText('abrahamnhier97@gmail.com');
        alert('Email copied to clipboard!');
      };

  return (
    <div className="flex justify-center items-center min-h-screen">
       <Card  className="max-w-sm p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
        <Avatar  size="large" className="w-24 h-24">
  <AvatarImage src="/prof.JPEG"  />
  <AvatarFallback>AN</AvatarFallback>
</Avatar>
        </div>
        <h3 className="text-center mb-2">Abraham Nhier</h3>
        <p className="text-center text-gray-500 mb-4">Software Engineer</p>
        <div className="space-y-4">
           <div className="flex items-center justify-between">
            <div className="flex items-center">
                <CiMail className="w-4 h-4 mr-2" />
               <p>abrahamnhier97@gmail.com</p> 
            </div>
            <Button onClick={handleCopy} className="ml-2 text-sm text-blue-500">Copy</Button>
            </div> 
            <div className="flex items-center">
               <FaPhone className="w-4 h-4 mr-2 text-gray-500" /> 
               <p>+254716903151</p>
            </div>
            <div className="flex items-center">
            <FaLinkedin className="w-4 h-4 mr-2 text-gray-500" />
            <a href="https://www.linkedin.com/in/nhier/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="flex items-center">
            <FaGithub name="github" className="w-4 h-4 mr-2 text-gray-500" />
            <a href="https://github.com/nhier17" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              <p>GitHub</p>
            </a>
          </div>
        </div>
        </Card> 
    </div>
  )
}

export default Contacts