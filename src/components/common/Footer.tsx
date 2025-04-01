import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-black py-50 px-160 text-white flex flex-wrap justify-between font-[family-name:var(--font-inter)] text-sm">
      <div className="">
        <Image src="/abm_logo.png" alt="Logo" width={120} height={120} />
        <ul className="mt-20">
          <li>
            <Link
              href="https://maps.app.goo.gl/NSSq15XbzbLBmfQcA"
              target="_blank"
            >
              242 Castlereagh Street Sydney NSW 2000
            </Link>
          </li>
          <li className="underline">
            <Link href="mailto:info@abm.edu.au" target="_blank">
              info@abm.edu.au
            </Link>
          </li>
          <li>+61 (02) 9160 4507</li>
          <li>(WhatsApp) + 61 482 796 0</li>
          <li>RTO 45578 | CRICOS 03826M</li>
          <li>ABN 37 623 414 817</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold">Home</li>
          <li>Courses</li>
          <li>
            <Link href="/short-courses" target="_blank">
              Short Courses
            </Link>
          </li>
          <li>
            <Link href="/study-with-us" target="_blank">
              Study With Us
            </Link>
          </li>
          <li>
            <Link href="/current-students" target="_blank">
              Current Students
            </Link>
          </li>
          <li>
            <Link href="/contact" target="_blank">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold">Courses</li>
          <li>
            <Link href="/courses" target="_blank">
              Cookery & Hospitality
            </Link>
          </li>
          <li>
            <Link href="/courses" target="_blank">
              Fitness & Sports
            </Link>
          </li>
          <li>
            <Link href="/courses" target="_blank">
              Business
            </Link>
          </li>
          <li>
            <Link href="/courses" target="_blank">
              Project & Program
            </Link>
          </li>
          <li>
            <Link href="/courses" target="_blank">
              Human Resources
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold">Short Courses</li>
          <li>
            <Link href="/short-courses" target="_blank">
              Barista Course
            </Link>
          </li>
          <li>
            <Link href="/short-courses" target="_blank">
              Classic French Pastries Course
            </Link>
          </li>
          <li>
            <Link href="/short-courses" target="_blank">
              Wine Course
            </Link>
          </li>
          <li>
            <Link href="/short-courses" target="_blank">
              Sourdough and Focaccia Course
            </Link>
          </li>
          <li>
            <Link href="/short-courses" target="_blank">
              Fine Dining Dessert Plating
            </Link>
          </li>
          <li>
            <Link href="/short-courses" target="_blank">
              Classic French Cakes Course
            </Link>
          </li>
          <li>
            <Link href="/short-courses" target="_blank">
              French Petit Four Course (Macaroon)
            </Link>
          </li>
          <li>
            <Link href="/short-courses" target="_blank">
              Vegan and Vegiterian Course
            </Link>
          </li>
          <li>
            <Link href="/short-courses" target="_blank">
              Chocolate Class - Xmas
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold">Agent</li>
          <li>
            <Link href="/agent" target="_blank">
              Agent Portal
            </Link>
          </li>
          <li>
            <Link href="/agent" target="_blank">
              Agent Application
            </Link>
          </li>
          <li>
            <Link href="/agent" target="_blank">
              Agent List
            </Link>
          </li>
          <li>
            <Link href="/agent" target="_blank">
              ABM Policies and Procedure
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
