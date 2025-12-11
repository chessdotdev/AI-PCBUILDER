# AI-PCBUILDER

A backend  that uses a remote LLM (Hugging Face router) to generate a compatible 7-part PC build from budget, purpose, and brand.

## Quick start

1. Use the API:
POST /api/pc-builder
Content-Type: application/json
Body: { "budget": 50000, "purpose": "gaming", "brand": "AMD" }


## Output format
Response is a plain text list with exactly 7 lines (one part per line, no extra commentary):
- CPU
- GPU
- RAM
- Motherboard
- Storage
- PSU
- Case

