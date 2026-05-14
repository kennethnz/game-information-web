# 🎮 GameVault — Cloud Gaming Store

A cloud-native gaming catalog app built on AWS using Infrastructure as Code.

## Tech Stack
- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Python Flask
- **Database:** Amazon RDS MySQL
- **Infrastructure:** AWS CloudFormation, EC2, ALB, VPC

## AWS Architecture
Internet → ALB → EC2 (Flask) → RDS MySQL

## Setup
```bash
# Frontend
cd frontend
npm install
npm run dev
```

## Status
## Progress
- [x] Network Layer (VPC, Subnets, IGW, Route Tables)
- [ ] Security Groups
- [ ] RDS MySQL
- [ ] EC2 + Auto Scaling
- [ ] Application Load Balancer
- [ ] Deploy to AWS