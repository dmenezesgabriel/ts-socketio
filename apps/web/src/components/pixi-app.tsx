import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite, AnimatedSprite } from "pixi.js";
import { Player } from "./entities/player";

// Extend Pixi components for React
extend({
  Container,
  Graphics,
  Sprite,
  AnimatedSprite,
});

export function PixiApp() {
  return (
    <Application width={800} height={600} backgroundColor={0x1099bb}>
      <Player />
    </Application>
  );
}
