import fs from 'fs';
import { createCanvas } from 'canvas';
import path from 'path';
import { fileURLToPath } from 'url';

const width = 300;
const height = 300;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#f5f5f5';
ctx.fillRect(0, 0, width, height);

const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#48B2E7');
gradient.addColorStop(1, '#0076B1');

ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(width / 2, height / 2, 100, 0, Math.PI * 2);
ctx.fill();

ctx.globalAlpha = 0.3;
for (let i = 0; i < 10; i++) {
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, 110 + i, 0, Math.PI * 2);
  ctx.fill();
}

ctx.globalAlpha = 1;
ctx.fillStyle = '#333';
ctx.font = 'bold 24px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Нет изображения', width / 2, height / 2);

const scriptDir = __dirname || path.dirname(process.argv[1]);

const outputPath = path.join(scriptDir, 'shoe_placeholder.jpg');

const buffer = canvas.toBuffer('image/jpeg');
fs.writeFileSync(outputPath, buffer);

console.log(`Плейсхолдер создан: ${outputPath}`);

const sizes = [
  { name: 'small', width: 150, height: 150 },
  { name: 'medium', width: 300, height: 300 },
  { name: 'large', width: 600, height: 600 }
];

sizes.forEach(size => {
  const sizeCanvas = createCanvas(size.width, size.height);
  const sizeCtx = sizeCanvas.getContext('2d');
  
  sizeCtx.fillStyle = '#f5f5f5';
  sizeCtx.fillRect(0, 0, size.width, size.height);
  
  const sizeGradient = sizeCtx.createLinearGradient(0, 0, size.width, size.height);
  sizeGradient.addColorStop(0, '#48B2E7');
  sizeGradient.addColorStop(1, '#0076B1');
  
  sizeCtx.fillStyle = sizeGradient;
  sizeCtx.beginPath();
  sizeCtx.arc(size.width / 2, size.height / 2, size.width / 3, 0, Math.PI * 2);
  sizeCtx.fill();
  
  sizeCtx.globalAlpha = 0.3;
  for (let i = 0; i < 10; i++) {
    sizeCtx.beginPath();
    sizeCtx.arc(size.width / 2, size.height / 2, (size.width / 3) + (i * size.width / 100), 0, Math.PI * 2);
    sizeCtx.fill();
  }
  
  sizeCtx.globalAlpha = 1;
  sizeCtx.fillStyle = '#333';
  sizeCtx.font = `bold ${size.width / 12}px Arial`;
  sizeCtx.textAlign = 'center';
  sizeCtx.textBaseline = 'middle';
  sizeCtx.fillText('Нет изображения', size.width / 2, size.height / 2);
  
  const sizeOutputPath = path.join(scriptDir, `shoe_placeholder_${size.name}.jpg`);
  const sizeBuffer = sizeCanvas.toBuffer('image/jpeg');
  fs.writeFileSync(sizeOutputPath, sizeBuffer);
  
  console.log(`Плейсхолдер ${size.name} создан: ${sizeOutputPath}`);
}); 