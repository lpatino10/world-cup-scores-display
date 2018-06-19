import sys
from PIL import Image, ImageFont, ImageDraw

def colorRed():
  return (255, 0, 0)

def writeImage(inputString, filename, ledRows):
  font = ImageFont.truetype('Minecraft.ttf', 28)
  width, ignore = font.getsize(inputString)
  im = Image.new('RGB', (width + 30, ledRows), 'black')
  draw = ImageDraw.Draw(im)
  draw.text((0, 0), inputString, fill=colorRed())

  im.save(filename)

if __name__ == '__main__':
  writeImage(sys.argv[1], sys.argv[2], 32)