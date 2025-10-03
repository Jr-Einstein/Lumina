"use client";
import * as React from "react";

// no-op, lightweight stubs so your page compiles
export function Accordion({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
export function AccordionItem({
  children,
}: {
  value?: string;
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
export function AccordionTrigger({
  children,
}: {
  value?: string;
  children: React.ReactNode;
}) {
  return <button type="button">{children}</button>;
}
export function AccordionContent({
  children,
}: {
  value?: string;
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
