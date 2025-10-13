"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import CodePolicies from "@/assets/CodeandPolicies.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [openItem, setOpenItem] = useState<string | null>("item-1");

  const handleAccordionChange = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${CodePolicies.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-4">
          <h1 className="text-5xl font-bold leading-tight">
            Frequently Asked Questions
          </h1>
          <p>
            We understand just how important it is for parents to choose the
            right school for their child. The process outlined below is typical
            but can be adapted to ensure that you and your child are supported
            every step of the way.
          </p>
        </div>
      </section>

      {/* Accordion + Download Section */}
      <section className="min-h-screen bg-gray-50 p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Accordion Section */}
          <div className="lg:col-span-3 space-y-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={openItem || ""}
              onValueChange={handleAccordionChange}
            >
              {[
  {
    "value": "item-1",
    "title": "What does Living Soul Schools look for in an applicant?",
    "content": [
      "We admit students based on performance in our entrance examination. A minimum score of 50% is required for admission consideration."
    ]
  },
  {
    "value": "item-2",
    "title": "Do I need to submit all parts of my application at the same time?",
    "content": [
      "No. However, you must submit at least your child’s most recent school report alongside the completed application form."
    ]
  },
  {
    "value": "item-3",
    "title": "How and when are admission decisions communicated?",
    "content": [
      "Admission decisions are communicated promptly after the entrance examination results are released."
    ]
  },
  {
    "value": "item-4",
    "title": "How do I apply for admission for my child?",
    "content": [
      "Applications can be made directly through the school’s administrative office or via our official social media platforms."
    ]
  },
  {
    "value": "item-5",
    "title": "What is the eligible age for admission (Day and Boarding)?",
    "content": [
      "Day students are admitted from age 2 upwards. Boarding is available from age 10."
    ]
  },
  {
    "value": "item-6",
    "title": "How do I obtain the admission/application form, and what is the cost?",
    "content": [
      "Forms are available at the school office for ₦10,000."
    ]
  },
  {
    "value": "item-7",
    "title": "When are the entrance examinations held, and what subjects do they cover?",
    "content": [
      "Entrance examinations are conducted every term (First, Second, and Third). The subjects covered include Mathematics, English, Verbal Reasoning, and Quantitative Reasoning."
    ]
  },
  {
    "value": "item-8",
    "title": "Can I know my child’s score after the entrance examination?",
    "content": [
      "Yes. Parents are informed of their child’s performance after the exams."
    ]
  },
  {
    "value": "item-9",
    "title": "What classes do you admit students into?",
    "content": [
      "We admit students into all classes except SS3 (final year of secondary school)."
    ]
  },
  {
    "value": "item-10",
    "title": "What curriculum does the school offer?",
    "content": [
      "Nursery & Primary: A blend of the Nigerian and British curriculum.",
      "Secondary: Nigerian curriculum."
    ]
  }
].map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border rounded-xl shadow-sm bg-white mb-2"
                >
                  <AccordionTrigger
                    className={cn(
                      "px-4 py-3 text-left text-md font-bold flex justify-between items-center transition-colors duration-200 no-underline hover:no-underline focus:no-underline data-[state=open]:no-underline",
                      openItem === item.value
                        ? "text-blue-950"
                        : "text-black"
                    )}
                  >
                    <span>{item.title}</span>

                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1 px-4 pb-3 text-gray-800">
                    {item.content.map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Download Section */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center justify-center  w-full max-h-fit space-y-4">
            <p className="text-gray-700">
              Got unanswered questions? Download the full FAQ document for more...
            </p>
            <Button className="px-6 md:px-8 text-white bg-blue-950 hover:bg-blue-900">
              Download
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
