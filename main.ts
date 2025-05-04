function sheep_leg(x: number, y: number, z: number) {
    blocks.place(GRASS, pos(x + 1, y, z + 1))
}

player.onChat("jump", function on_chat() {
    sheep_leg(0, 0, 0)
})
