import { Assets, Spritesheet, Texture, type AnimatedSprite } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import spriteSheet from "../assets/bonus1_full.png";

const atlasData = {
  frames: {
    walk_down_1: {
      frame: { x: 0, y: 0, w: 52, h: 74 },
      sourceSize: { w: 52, h: 74 },
      spriteSourceSize: { x: 0, y: 0, w: 52, h: 74 },
    },
    walk_down_2: {
      frame: { x: 52, y: 0, w: 52, h: 74 },
      sourceSize: { w: 52, h: 74 },
      spriteSourceSize: { x: 0, y: 0, w: 52, h: 74 },
    },
  },
  meta: {
    image: spriteSheet,
    format: "RGBA8888",
    size: { w: 624, h: 576 },
    scale: 1,
  },
  animations: {
    animate: ["walk_down_1", "walk_down_2"],
  },
};

export function Game() {
  const spriteRef = useRef<AnimatedSprite | null>(null);
  const [texture, setTexture] = useState(Texture.EMPTY);
  const [frames, setFrames] = useState<Texture[]>([Texture.EMPTY]);

  useEffect(() => {
    async function createAnimation() {
      const spritesheet = new Spritesheet(texture, atlasData);
      await spritesheet.parse();

      setFrames(spritesheet.animations.animate);
    }

    if (texture === Texture.EMPTY) {
      Assets.load(spriteSheet).then((result) => {
        setTexture(result);
      });
    }

    createAnimation();
  }, [texture]);

  useEffect(() => {
    if (frames.length > 0 && spriteRef.current) {
      spriteRef.current.play();
    }
  }, [frames]);

  return (
    <pixiAnimatedSprite
      ref={spriteRef}
      scale={1}
      textures={frames}
      animationSpeed={0.05}
    />
  );
}
