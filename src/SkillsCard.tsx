import React from "react";

export type SkillsCardProps = {
  imageComponent: React.ReactNode;
  children: React.ReactNode;
};
export function SkillsCard({ imageComponent, children }: SkillsCardProps) {
  return (
    <div className="flex h-64 w-64 flex-col items-center justify-center overflow-hidden rounded-2xl bg-zinc-700 p-3">
      {imageComponent}
      <p className="mt-7 font-playFair text-3xl font-bold text-white">
        {children}
      </p>
    </div>
  );
}
