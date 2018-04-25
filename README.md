# jc3mp-debug-circle
An easy to use rendering utility to debug things fast

![alt](https://i.imgur.com/8xRsdEx.png)

## Installation

Just drop it in your packages directory, and you're done!

## Usage

Use `jcmp.DrawCircle(renderer, position, size, color);` clientside.

Position and size must be Vector2f. Color (optional) must be a string that is a recognized CSS color. 

### Example Usage
```
jcmp.events.Add('Render', (r) => 
{
    jcmp.players.forEach(function(p) 
    {
        jcmp.DrawCircle(r, r.WorldToScreen(p.position), new Vector2f(25,25), 'blue');
    });
});
```
The above code will draw a blue circle at every streamed player's position.