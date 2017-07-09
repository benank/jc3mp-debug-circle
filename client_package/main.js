const circle = new WebUIWindow(
    'draw-circle', 
    'package://draw-circle/ui/index.html', 
    new Vector2(1000, 1000)
);

circle.autoResize = false;
circle.hidden = true;
circle.autoRenderTexture = false;

jcmp.DrawCircle = function(r, pos, size)
{
    // If the circle is off our screen, don't draw it.
    if (pos.x == -1 && pos.y == -1)
    {
        return;
    }

    r.DrawTexture(circle.texture, pos, size);
}