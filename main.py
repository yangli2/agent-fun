def sheep_leg(x, y, z):
    blocks.place(GRASS, pos(x+1, y, z+1))

def on_chat():
    sheep_leg(0,0,0)

player.on_chat("jump", on_chat)