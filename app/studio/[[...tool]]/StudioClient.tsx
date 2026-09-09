"use client";

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config' // adjust path to your sanity.config file

export default function StudioClient() {
    return (
        <div className="fixed inset-0 z-[99999] bg-white overflow-hidden">
            <NextStudio config={config} />
        </div>
    )
}