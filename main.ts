// Game Config
let cat_speed = 30
let max_enemies = 150
let timeTillOutbreak = 1000

let Player = sprites.create(assets.image`Player`, SpriteKind.Player)
let Cats: Sprite[] = []
controller.moveSprite(Player)
scene.cameraFollowSprite(Player)
scene.setBackgroundImage(assets.image`myImage`)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
game.onUpdate(function() {
    
    
})
game.onUpdateInterval(500, function() {
    if (timeTillOutbreak < game.runtime())
        if (Cats.length < max_enemies){
            let c: Sprite = sprites.create(assets.image`Cat`, SpriteKind.Enemy)
            c.follow(Player, cat_speed)
            Cats.push(c)
        }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    game.over(false)
})