"use client";

import { JSX, ReactNode } from "react";
import Image from "next/image";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  reverse?: boolean; 
}

export default function InfoCard({
  imageSrc,
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  reverse = false,
}: InfoCardProps): JSX.Element {
  return (
    <div
      className="flex flex-col md:flex-row  items-center justify-center gap-8 p-6 bg-gray-50 rounded-2xl "
    >
      <div className="shrink-0 ">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="max-w-md text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-4">{subtitle}</h2>
        <p className="text-gray-500 mb-4">{description}</p>

        {buttonText && buttonHref && (
          <a
            href={buttonHref}
            className="inline-block px-6 py-2 bg-linear-to-r from-emerald-600 to-emerald-400 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
