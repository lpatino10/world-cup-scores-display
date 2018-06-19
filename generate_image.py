import sys
import textwrap
from PIL import Image, ImageFont, ImageDraw

def colorRed():
  return (255, 0, 0)

def writeImage(inputString, filename, ledRows):
  font = ImageFont.truetype('Minecraft.ttf', 12)
  im = Image.new('RGB', (58, ledRows), 'black')  
  draw = ImageDraw.Draw(im)
  lines = textwrap.wrap(inputString, width=7)
  y_text = -2 
  for line in lines: 
    width, height = font.getsize(line)
    draw.text((0, y_text), line, fill=colorRed())
    y_text += height

  im.save(filename)

if __name__ == '__main__':
  writeImage(sys.argv[1], sys.argv[2], 32)
