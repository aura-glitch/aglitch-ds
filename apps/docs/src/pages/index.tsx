import { Button } from "@aura-glitch/ds-core";
import { useIsomorphicLayoutEffect } from "@aura-glitch/ds-utils";
import React from "react";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Aura Glitch Design System docs page");
  }, []);
  return (
    <div>
      <h1>Aura Glitch Design System Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
