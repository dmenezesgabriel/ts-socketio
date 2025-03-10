import { Assets, Spritesheet, Texture, type AnimatedSprite } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import spriteSheet from "@/assets/sprites/bonus1_full.png";
import playerAtlasData from "@/assets/animations/player.json";

type DirectionType = "walkDown" | "walkLeft" | "walkRight" | "walkUp";

export function Player() {
  const spriteRef = useRef<AnimatedSprite | null>(null);
  const [texture, setTexture] = useState(Texture.EMPTY);
  const [frames, setFrames] = useState<Texture[]>([Texture.EMPTY]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<DirectionType>("walkDown");

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    setPosition((prevPosition) => {
      switch (key) {
        case "w":
          setDirection("walkUp");
          return { ...prevPosition, y: prevPosition.y - 5 };
        case "a":
          setDirection("walkLeft");
          return { ...prevPosition, x: prevPosition.x - 5 };
        case "s":
          setDirection("walkDown");
          return { ...prevPosition, y: prevPosition.y + 5 };
        case "d":
          setDirection("walkRight");
          return { ...prevPosition, x: prevPosition.x + 5 };
        default:
          return prevPosition;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    async function createAnimation() {
      const atlasData = {
        ...playerAtlasData,
        meta: { ...playerAtlasData.meta, image: spriteSheet },
      };

      const spritesheet = new Spritesheet(texture, atlasData);
      await spritesheet.parse();

      setFrames(spritesheet.animations[direction]);
    }

    if (texture === Texture.EMPTY) {
      Assets.load(spriteSheet).then((result) => {
        setTexture(result);
      });
    }

    createAnimation();
  }, [direction, texture]);

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
      animationSpeed={0.1}
      x={position.x}
      y={position.y}
    />
  );
}
