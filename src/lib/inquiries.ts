const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export type ProjectInquiryInput = {
  name: string
  email: string
  company?: string
  project_type: string
  budget_range: string
  timeline: string
  involvement: string
  details: string
  website?: string
}

export async function submitProjectInquiry(input: ProjectInquiryInput) {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    throw new Error('Project intake is temporarily unavailable.')
  }

  const response = await fetch(`${SUPABASE_URL}/functions/v1/submit-project-inquiry`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(
      typeof result?.error === 'string'
        ? result.error
        : 'Unable to submit right now. Please try again.',
    )
  }

  return result as { ok: true; request_id?: string; duplicate?: boolean }
}
