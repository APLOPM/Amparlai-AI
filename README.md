# Amparlai-AI

โครงสร้างนี้เป็น **Frontend Project Blueprint** สำหรับ Next.js App Router ที่ออกแบบสำหรับ
**Enterprise-Grade Multi-Agent Platform** โดยยึดหลัก
**Agent Isolation, Scalability, RBAC, และ Calm Technology UI**

## Technology Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Zustand / Redux Toolkit
- TanStack Query
- Genkit Client SDK

## Project Structure

```text
/app
/components
/features
/lib
/hooks
/store
/styles
/types
/utils
/config
/public
```

## แนวคิดสถาปัตยกรรม

- **1 Agent = 1 Route boundary** (`/app/<agent>/page.tsx`)
- **Domain isolation** แยกตามโฟลเดอร์ใน `/features`
- **Reusable UI system** อยู่ใน `/components`
- แยก **API / Business logic / State / UI** ชัดเจน
- รองรับการเพิ่ม `middleware.ts` สำหรับ RBAC และ session validation

## Run locally

```bash
python3 -m http.server 8000
```

Open: <http://localhost:8000>

## CI/CD + Deployment Blueprint

เพิ่มเอกสารและไฟล์ template สำหรับ CI/CD + Kubernetes deployment แล้วที่:

- `docs/ci-cd-deployment-blueprint.md`
- `.github/workflows/ci.yml`
- `.github/workflows/cd.yml`
- `k8s/*.yaml`

เอกสารนี้ครอบคลุม Git strategy, security scanning, zero-downtime rollout, auto-scaling, rollback, secrets management และ observability สำหรับระบบ AI multi-agent ระดับ enterprise.
