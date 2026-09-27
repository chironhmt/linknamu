"use client";

import type { LinkItem } from "@/lib/links";

export default function LinkCard({ id, title, url }: LinkItem) {
  const handleClick = () => {
    fetch(`/api/links/${id}/click`, {
      method: "POST",
      keepalive: true,
    }).catch(() => {
      // 클릭 집계 실패는 사용자 이동을 막지 않는다.
    });
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-xl border border-neutral-200 bg-white px-5 py-4 text-center font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    >
      {title}
    </a>
  );
}
