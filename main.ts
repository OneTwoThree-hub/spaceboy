sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(true)
})
scene.setBackgroundImage(assets.image`Spaec`)
let mySprite = sprites.create(assets.image`myImage8`, SpriteKind.Player)
mySprite.setBounceOnWall(true)
mySprite.vx = 60
mySprite.vy = 40
