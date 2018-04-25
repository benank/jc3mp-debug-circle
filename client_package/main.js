const circles = {};
const div = new Vector2f(2,2);

function AddNewCircle(color)
{
    if (circles[color]) {return;}

    circles[color] = new WebUIWindow(`draw-circle-${color}`, 'package://draw-circle/ui/index.html', new Vector2(1000, 1000));

    circles[color].AddEvent('ready', () => 
    {
        circles[color].CallEvent('set_color', color);
    })

    circles[color].autoResize = false;
    circles[color].hidden = true;
    circles[color].autoRenderTexture = false;
}

jcmp.DrawCircle = function(r, pos, size, color)
{
    if (!color) {color = 'red';}

    if (!circles[color])
    {
        AddNewCircle(color);
        return;
    }


    // If the circle is off our screen, don't draw it.
    if (pos.x == -1 && pos.y == -1)
    {
        return;
    }

    r.DrawTexture(circles[color].texture, pos.sub(size.div(div)), size);
}