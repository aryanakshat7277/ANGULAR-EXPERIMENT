const fs = require('fs');
const path = require('path');

function detectActiveContext() {
  const cwd = process.cwd();
  let activeModule = '';
  let activeExp = 'all';

  if (/Module_0?1/i.test(cwd)) activeModule = 'module1';
  else if (/Module_0?2/i.test(cwd)) activeModule = 'module2';
  else if (/Module_0?3/i.test(cwd)) activeModule = 'module3';
  else if (/Module_0?4/i.test(cwd)) activeModule = 'module4';
  else if (/Module_0?5/i.test(cwd)) activeModule = 'module5';
  else if (/Module_0?6/i.test(cwd)) activeModule = 'module6';
  else if (/Module_0?7/i.test(cwd)) activeModule = 'module7';

  const expMatch = cwd.match(/Experiment_(\d+\.\d+)/i);
  if (expMatch) {
    activeExp = expMatch[1];
  }

  return { cwd, activeModule, activeExp };
}

module.exports = {
  '/api/current-context': {
    target: 'http://localhost:4200',
    secure: false,
    bypass: function(req, res) {
      if (req.url.startsWith('/api/current-context')) {
        const data = detectActiveContext();
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify(data));
        return true;
      }
      return null;
    }
  }
};
