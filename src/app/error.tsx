"use client";

export default function Error({ error }: { error: { message?: string } }) {
  return <div>{error.message}</div>;
}
