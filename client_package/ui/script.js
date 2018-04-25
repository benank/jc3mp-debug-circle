jcmp.AddEvent('set_color', (color) => 
{
    document.getElementById('circle').style.backgroundColor = color;
})

jcmp.CallLocalEvent('ready');