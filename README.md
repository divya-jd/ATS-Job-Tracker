# ATS-Job-Tracker Automation

> Automate job discovery across 16+ Applicant Tracking Systems (ATS) — Greenhouse, Lever, Workday, Ashby, BambooHR, and more — using **Google Apps Script + Custom Search API**.

[![Made with Google Apps Script](https://img.shields.io/badge/Made%20with-Google%20Apps%20Script-blue?logo=google)](https://script.google.com/)
[![Google Sheets](https://img.shields.io/badge/Powered%20by-Google%20Sheets-34A853?logo=google-sheets)](https://sheets.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Automation Level](https://img.shields.io/badge/Automation-100%25-success)](#)
[![Stars](https://img.shields.io/github/stars/divya-jd/ats-job-tracker?style=social)](https://github.com/divya-jd/ATS-Job-Tracker)

---

## Overview

This project automatically tracks newly posted jobs across major ATS platforms (like Greenhouse, Lever, Workday, BambooHR, etc.) and logs them into Google Sheets in real time.  
You can set it to run **hourly**, send **email alerts**, and even integrate with Telegram or Slack later.  

---

## Tech Stack

| Component | Description |
|------------|--------------|
| **Google Apps Script** | Backend automation & triggers |
| **Google Custom Search API** | Fetches job postings |
| **Google Sheets** | Data logging layer |
| **Google Cloud Console** | API credentials management |

---

## Features

1. Fetches fresh jobs every hour  
2. Supports 16+ ATS systems  
3. Logs titles, companies, and links  
4. Optional email alerts  
5. 100% serverless — runs on free Google infra  
6. No paid tools or external dependencies  

---

## Architecture

```text
[Google Custom Search API]
          ↓
 [Apps Script fetchATSJobs()]
          ↓
 [Google Sheet Logger] → [Email Alert (optional)]

## Screenshots (placeholders)

| Google Sheet Output                           | Email Alert                            | Apps Script Trigger                             |
| --------------------------------------------- | -------------------------------------- | ----------------------------------------------- |
| ![sheet](screenshots/google_sheet_output.png) | ![email](screenshots/email_sample.png) | ![trigger](screenshots/apps_script_trigger.png) |

