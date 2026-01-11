export type BlogCategory = "blog" | "tutorial" | "script";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content: string;
  script?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "free-n8n-hosting-aws-lightsail",
    title: "Free n8n Hosting for 3 Months",
    description:
      "Stop paying for n8n cloud - learn how to self-host it completely free for 3 months using AWS Lightsail.",
    category: "tutorial",
    date: "2025-01-11",
    readTime: "5 min",
    tags: ["n8n", "AWS", "Automation", "Self-hosting", "Docker"],
    featured: true,
    content: `
## Overview

Stop paying for n8n cloud – here's how to self-host it completely free for 3 months using AWS Lightsail's free tier.

This guide will save you **$60** compared to n8n cloud pricing.

---

## Prerequisites

Before we begin, you'll need:

1. **AWS Account** - If you don't have one, go to [aws.amazon.com](https://aws.amazon.com) and create a free account. New accounts get **$200 in free credits** plus the free tier! You'll need a credit card for verification, but you won't be charged during the free tier period.

2. **A domain name** (optional but recommended) - For SSL and professional access to your n8n instance.

---

## Step 1: Create AWS Lightsail Instance

1. Go to [AWS Lightsail](https://lightsail.aws.amazon.com)
2. Click **"Create instance"**
3. Select your preferred region (choose one close to you for better latency)
4. Under "Select a platform", choose **Linux/Unix**
5. Under "Select a blueprint", choose **OS Only** → **Ubuntu 22.04 LTS**
6. Select the **$7/month plan** – it says **"First 90 days free"**

> **Note:** The $7 plan includes 1GB RAM, 1 vCPU, 40GB SSD, and 2TB transfer – more than enough for n8n.

---

## Step 2: Add Launch Script

Before creating the instance, scroll down to **"Launch script"** and paste the following Docker setup script:

\`\`\`bash
#!/bin/bash
apt-get update -y
apt-get install -y docker.io
docker run -d --restart always --name n8n -p 5678:5678 -e N8N_SECURE_COOKIE=false -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
\`\`\`

This script will:
- Update the system packages
- Install Docker
- Pull and run the official n8n Docker image
- Configure n8n to restart automatically if the server reboots
- Store your workflows persistently in a Docker volume

Click **"Create instance"** and wait for it to spin up (usually takes 1-2 minutes).

---

## Step 3: Configure Firewall

Once your instance is running:

1. Click on your instance name to open its details
2. Go to the **"Networking"** tab
3. Under "IPv4 Firewall", click **"Add rule"**
4. Add the following rules:

| Application | Protocol | Port |
|-------------|----------|------|
| HTTP | TCP | 80 |
| HTTPS | TCP | 443 |
| Custom | TCP | 5678 |

5. Click **"Save"**

---

## Step 4: Connect Your Domain (Optional)

If you have a domain:

1. Copy the **Public IP** from your Lightsail instance
2. Go to your domain registrar's DNS settings
3. Create an **A record** pointing to your Lightsail IP:
   - **Type:** A
   - **Name:** n8n (or @ for root domain)
   - **Value:** Your Lightsail Public IP
   - **TTL:** 300

---

## Step 5: Access n8n

Wait about 5 minutes for everything to initialize, then:

1. Open your browser
2. Go to \`http://YOUR_IP:5678\` or \`http://your-domain.com:5678\`
3. You should see the n8n setup screen!

Create your admin account and start building workflows.

---

## What You Get

- **Unlimited workflows** (n8n cloud limits you on the starter plan)
- **Zero cost for 3 months**
- **Full control** over your data and instance
- **No execution limits**

---

## Cost Comparison

**n8n Cloud Starter:** $20/month → $60 for 3 months

**AWS Lightsail (Free Tier):** $0/month → $0 for 3 months

**You Save: $60 over 3 months!**

> **Bonus:** New AWS accounts get $200 in free credits, so even after the 3-month Lightsail free tier ends, you can keep running n8n for free using those credits!

---

## Pro Tips

1. **Set up automatic backups** in Lightsail for $1/month after the free tier
2. **Add SSL** using Let's Encrypt for secure HTTPS access
3. **Monitor your usage** in the Lightsail dashboard

---

## Troubleshooting

**n8n not loading?**
- Wait 5 minutes after instance creation
- Check if port 5678 is open in the firewall
- SSH into your instance and run \`docker logs n8n\` to check for errors

**Docker not running?**
- SSH into your instance
- Run \`sudo systemctl start docker\`
- Then run the docker command from the script manually

---

## Next Steps

After your 3-month free tier ends, you have options:

1. **Continue on Lightsail** at $7/month (still cheaper than n8n cloud)
2. **Migrate to another provider** using the Docker volume backup
3. **Upgrade your instance** if you need more resources

Follow me for more automation tips and tutorials!
    `,
    script: `#!/bin/bash
apt-get update -y
apt-get install -y docker.io
docker run -d --restart always --name n8n -p 5678:5678 -e N8N_SECURE_COOKIE=false -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n`,
  },
  {
    id: "2",
    slug: "n8n-aws-lightsail-launch-script",
    title: "n8n AWS Lightsail Launch Script",
    description:
      "One-click launch script to deploy n8n on AWS Lightsail with Docker. Just paste and go.",
    category: "script",
    date: "2025-01-11",
    readTime: "1 min",
    tags: ["n8n", "AWS", "Docker", "Bash", "Script"],
    featured: false,
    content: `
## n8n Launch Script for AWS Lightsail

This bash script automatically sets up n8n on a fresh Ubuntu instance using Docker.

---

## What This Script Does

1. **Updates system packages** - Ensures your system is up to date
2. **Installs Docker** - Sets up Docker from official Ubuntu repositories
3. **Deploys n8n** - Pulls and runs the official n8n Docker image with:
   - Auto-restart on reboot
   - Persistent data storage
   - Port 5678 exposed
   - Secure cookie disabled (for HTTP access)

---

## Usage

1. Create an AWS Lightsail instance with Ubuntu
2. Paste this script in the **Launch Script** field during setup
3. Or SSH into your instance and run it manually

---

## The Script

Copy the script below and paste it in your Lightsail launch script field:

---

## Configuration Options

You can modify the docker run command to customize your setup:

- **Change port**: Replace \`-p 5678:5678\` with \`-p YOUR_PORT:5678\`
- **Enable HTTPS**: Remove \`-e N8N_SECURE_COOKIE=false\` when using SSL
- **Custom timezone**: Add \`-e GENERIC_TIMEZONE=America/New_York\`
- **Webhook URL**: Add \`-e WEBHOOK_URL=https://your-domain.com\`

---

## After Running

1. Wait 3-5 minutes for installation to complete
2. Open port 5678 in Lightsail firewall
3. Access n8n at \`http://YOUR_IP:5678\`
4. Create your admin account

---

## Related

Check out the full tutorial for step-by-step instructions with screenshots.
    `,
    script: `#!/bin/bash
apt-get update -y
apt-get install -y docker.io
docker run -d --restart always --name n8n -p 5678:5678 -e N8N_SECURE_COOKIE=false -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n`,
  },
];

export const categoryLabels: Record<BlogCategory, string> = {
  blog: "Blog",
  tutorial: "Tutorial",
  script: "Script",
};

export const categoryColors: Record<BlogCategory, string> = {
  blog: "bg-blue-500/15 text-blue-500 ring-1 ring-blue-500/30",
  tutorial: "bg-green-500/15 text-green-500 ring-1 ring-green-500/30",
  script: "bg-purple-500/15 text-purple-500 ring-1 ring-purple-500/30",
};
