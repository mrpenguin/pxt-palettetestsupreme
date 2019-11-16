let mySprite = sprites.create(img`
    . . . . . d d d d d d . . . . .
    . . . d d d d d d d d d d . . .
    . . d d d d d d d d d d d d . .
    . d d d d d d d d d d d d d d .
    . d d d c c d d d c c d d d d .
    . d d d c c d d d c c d d d d .
    . d d d d d d d d d d d d d d .
    . d d d d d d d d d d d d d c .
    . . d d d d d c d d d d d c . .
    . . . . d d d d d d d c c . . .
    . . . . . d d d d c c . . . . .
    . . . . d d d d d d d d . . . .
    . . . . d d d d d d d d . . . .
    . . . . . d d d d d c . . . . .
    . . . . . d d c c d c . . . . .
    . . . . . d d . . d d . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setTileMap(img`
    c c c c c c c c c c c c c c c c
    c b b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c 4 b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b 2 c
    c b b b b b b b b b b b b b b c
    c c c c c c c c c c c c c c c c
`)
scene.setTile(12, projectImages.wall, true)
scene.setTile(11, img`
    b b b b b b b b b b b b b b b b
    b b 6 6 b b b 6 b b b b b b b b
    b b b 6 6 6 6 6 b b b b b b b b
    b b b b b b b b b b b b 6 6 b b
    b b b b b b b b b b b b b 6 6 b
    b b b b b b b b b b b b b 6 6 b
    b b 6 6 b b b b b b b b b 6 b b
    b b 6 b b b b b b b b 6 6 b b b
    b b 6 6 b b b b b b b b b b b b
    b b b 6 b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b 6 b b b b
    b b b b b b b b b b b 6 b b b b
    b b b b b b b b b b b 6 b b b b
    b b b b b b b b 6 6 6 b b b b b
    b b b b b b b b b b b b b b b b
`, false)
scene.setTile(4, img`
    b b b b b b b b b b b b b b b b
    b b b b b 3 3 3 3 3 3 b b b b b
    b b b 3 3 5 5 5 5 5 5 4 4 b b b
    b b 3 5 5 4 4 4 4 4 4 5 5 4 b b
    b 3 5 4 4 4 4 4 4 4 4 4 4 5 4 b
    b 3 5 4 4 4 4 4 4 4 4 4 4 5 4 b
    3 5 4 4 4 4 4 4 4 4 4 4 4 4 5 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    c 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c
    b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c
    b c 4 a a 4 4 4 4 4 4 a a 4 c b
    b b c 4 4 a a a a a a 4 4 c b b
    b b b c c 4 4 4 4 4 4 c c b b b
    b b b b b c c c c c c b b b b b
`, true)
scene.setTile(2, img`
    b b b b b b b b b b b b b b b b
    b b b b b 3 3 3 3 3 3 b b b b b
    b b b 3 3 4 4 4 4 4 4 2 2 b b b
    b b 3 4 4 2 2 2 2 2 2 4 4 2 b b
    b 3 4 2 2 2 2 2 2 2 2 2 2 4 2 b
    b 3 4 2 2 2 2 2 2 2 2 2 2 4 2 b
    3 4 2 2 2 2 2 2 2 2 2 2 2 2 4 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c
    b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c
    b c 2 a a 2 2 2 2 2 2 a a 2 c b
    b b c 2 2 a a a a a a 2 2 c b b
    b b b c c 2 2 2 2 2 2 c c b b b
    b b b b b c c c c c c b b b b b
`, true)
scene.cameraFollowSprite(mySprite)

scene.onHitTile(SpriteKind.Player, 4, function (sprite: Sprite) {
    image.setPalette(palettes.syz15Pallette)
})

scene.onHitTile(SpriteKind.Player, 2, function (sprite: Sprite) {
    image.setPalette(palettes.basePallette)
})
