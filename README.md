# TS Socket.IO

suggested frontend dir structure

```sh
/src
│── /assets                # All game assets (images, sounds, spritesheets, etc.)
│   ├── /sprites           # Spritesheets & textures
│   │   ├── player.png
│   │   ├── enemy.png
│   │   ├── world_tileset.png
│   │   └── items.png
│   ├── /animations        # JSON / JS files for animations
│   │   ├── player.json
│   │   ├── enemy.json
│   │   ├── effects.json
│   │   └── ui.json
│   ├── /sounds            # Sound effects & music
│   ├── /fonts             # Game fonts
│   └── /shaders           # GLSL shaders (if used)
│
│── /components            # Reusable UI and PIXI components
│   ├── /ui                # Buttons, HUD, etc.
│   │   ├── Button.tsx
│   │   ├── HealthBar.tsx
│   │   └── Score.tsx
│   ├── /game              # Main game logic
│   │   ├── Game.tsx       # Entry point for the game
│   │   ├── World.tsx      # Manages the game world
│   │   ├── Camera.tsx     # Handles camera movement
│   │   ├── Input.tsx      # Handles keyboard/mouse input
│   │   ├── Physics.tsx    # Handles collisions/physics
│   │   ├── Events.tsx     # Game event manager
│   │   ├── HUD.tsx        # Heads-up display
│   │   ├── GameOver.tsx   # Game over screen
│   │   └── PauseMenu.tsx  # Pause menu
│   ├── /entities          # Individual game objects
│   │   ├── /player
│   │   │   ├── Player.tsx
│   │   │   ├── PlayerController.ts
│   │   │   ├── PlayerAnimations.ts
│   │   │   └── PlayerState.ts
│   │   ├── /enemies
│   │   │   ├── Enemy.tsx
│   │   │   ├── EnemyAI.ts
│   │   │   └── EnemyAnimations.ts
│   │   ├── /items
│   │   │   ├── Coin.tsx
│   │   │   ├── PowerUp.tsx
│   │   │   └── Key.tsx
│   │   ├── /projectiles
│   │   │   ├── Bullet.tsx
│   │   │   ├── Missile.tsx
│   │   │   └── Explosion.tsx
│   │   ├── NPC.tsx
│   │   └── Collectible.tsx
│   ├── /animations        # Animated sprite components
│   │   ├── AnimatedSprite.tsx
│   │   ├── PlayerAnimation.tsx
│   │   ├── EnemyAnimation.tsx
│   │   └── ExplosionAnimation.tsx
│   ├── /effects           # Visual effects like particles, shaders, etc.
│   │   ├── ParticleEffect.tsx
│   │   ├── ExplosionEffect.tsx
│   │   ├── FireEffect.tsx
│   │   └── SmokeEffect.tsx
│   ├── /scenes            # Different game scenes
│   │   ├── StartScreen.tsx
│   │   ├── GameScreen.tsx
│   │   ├── GameOverScreen.tsx
│   │   └── PauseScreen.tsx
│   ├── /systems           # Systems for game mechanics (optional)
│   │   ├── MovementSystem.ts
│   │   ├── CollisionSystem.ts
│   │   ├── AISystem.ts
│   │   ├── InventorySystem.ts
│   │   ├── DialogueSystem.ts
│   │   └── CombatSystem.ts
│   └── /hooks             # Custom React hooks
│       ├── useGameLoop.ts
│       ├── useAnimation.ts
│       ├── usePhysics.ts
│       └── useSound.ts
│
│── /utils                 # Helper functions (e.g., math, random, assets loader)
│   ├── MathUtils.ts
│   ├── AssetLoader.ts
│   ├── SpriteUtils.ts
│   ├── InputUtils.ts
│   └── SoundUtils.ts
│
│── /config                # Configuration settings (e.g., game constants, settings)
│   ├── GameConfig.ts
│   ├── KeysConfig.ts
│   ├── PhysicsConfig.ts
│   ├── UIConfig.ts
│   └── EnemyConfig.ts
│
│── main.tsx               # Entry point for the app
│── App.tsx                # React app wrapper
│── index.css              # Global styles
│── vite.config.ts         # Vite configuration
│── tsconfig.json          # TypeScript configuration
│── package.json           # Dependencies
│
└── /public                # Static assets (if needed)
```
