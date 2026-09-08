"use client";

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config' // adjust path to your sanity.config file

export default function StudioClient() {
    return <NextStudio config={config} />
}