export type ProjectInquiryInput = {
  name: string;
  email: string;
  company?: string;
  project_type: string;
  budget_range: string;
  timeline: string;
  involvement: string;
  details: string;
  website?: string;
};

export async function submitProjectInquiry(input: ProjectInquiryInput) {
  let response: Response;
  try {
    response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    throw new Error(
      "We could not confirm receipt. Your brief is still here; please retry or email hello@srccvde.com.",
    );
  }

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      typeof result?.error === "string"
        ? result.error
        : "Unable to submit right now. Please try again.",
    );
  }

  if (
    result?.ok !== true ||
    (result.request_id !== undefined &&
      typeof result.request_id !== "string") ||
    (result.duplicate !== undefined && typeof result.duplicate !== "boolean")
  ) {
    throw new Error(
      "We could not confirm receipt. Please retry or email hello@srccvde.com.",
    );
  }
  return result as { ok: true; request_id?: string; duplicate?: boolean };
}
