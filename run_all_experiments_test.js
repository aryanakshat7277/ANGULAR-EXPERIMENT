const { execSync } = require('child_process');
const path = require('path');

const ROOT = __dirname;
const APP_DIR = path.join(ROOT, 'my-first-app');
const NODE_MODULES = path.join(APP_DIR, 'node_modules');

console.log('================================================================');
console.log('🧪 RUNNING COMPLETE TEST SUITE FOR ALL ANGULAR 22 EXPERIMENTS');
console.log('================================================================\n');

let passedCount = 0;
let totalCount = 0;

function runStep(title, cmd, cwd = ROOT, envExtra = {}) {
  totalCount++;
  console.log(`----------------------------------------------------------------`);
  console.log(`▶ Test #${totalCount}: ${title}`);
  console.log(`Command: ${cmd}`);
  try {
    const stdout = execSync(cmd, {
      cwd,
      env: { ...process.env, ...envExtra, NODE_PATH: NODE_MODULES },
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe']
    });
    console.log(`✅ Result: PASS`);
    if (stdout.trim()) {
      console.log(`Output:\n${stdout.trim().split('\n').map(l => '   ' + l).join('\n')}`);
    }
    passedCount++;
    return true;
  } catch (err) {
    console.error(`❌ Result: FAIL`);
    if (err.stdout) console.log(`Stdout: ${err.stdout}`);
    if (err.stderr) console.error(`Stderr: ${err.stderr}`);
    return false;
  }
}

// 1. Module 1: Standalone TypeScript experiments
runStep(
  'Module 1 / Exp 1.8: Compile and Run hello.ts',
  'npx tsc --ignoreConfig hello.ts && node hello.js',
  path.join(ROOT, 'Module_01_Introduction_to_Angular_and_TypeScript_Basics', 'Experiment_1.8_Install_and_Setup_TypeScript')
);

runStep(
  'Module 1 / Exp 1.9: Compile and Run basics.ts',
  'npx tsc --ignoreConfig basics.ts && node basics.js',
  path.join(ROOT, 'Module_01_Introduction_to_Angular_and_TypeScript_Basics', 'Experiment_1.9_Implement_Basic_TypeScript_Syntax')
);

runStep(
  'Module 1 / Exp 1.10: Compile and Run student-model.ts',
  'npx tsc --ignoreConfig student-model.ts && node student-model.js',
  path.join(ROOT, 'Module_01_Introduction_to_Angular_and_TypeScript_Basics', 'Experiment_1.10_Classes_and_Interfaces_in_TypeScript')
);

// 2. Module 7: Standalone RxJS experiments
runStep(
  'Module 7 / Exp 7.1: Execute RxJS Observable Stream (observable-demo.ts)',
  'npx tsx observable-demo.ts',
  path.join(ROOT, 'Module_07_RxJS_Testing_and_Deployment', 'Experiment_7.1_Creating_and_Subscribing_to_Observables')
);

runStep(
  'Module 7 / Exp 7.2: Execute RxJS Pipeable Operators filter & map (operators-demo.ts)',
  'npx tsx operators-demo.ts',
  path.join(ROOT, 'Module_07_RxJS_Testing_and_Deployment', 'Experiment_7.2_RxJS_Operators_Data_Transformation')
);

runStep(
  'Module 7 / Exp 7.3: Execute Combining Observables with forkJoin (combine-demo.ts)',
  'npx tsx combine-demo.ts',
  path.join(ROOT, 'Module_07_RxJS_Testing_and_Deployment', 'Experiment_7.3_Combining_Observables_Using_RxJS')
);

runStep(
  'Module 7 / Exp 7.4: Execute RxJS Error Handling with catchError (error-handling-demo.ts)',
  'npx tsx error-handling-demo.ts',
  path.join(ROOT, 'Module_07_RxJS_Testing_and_Deployment', 'Experiment_7.4_Error_Handling_in_RxJS')
);

// 3. Modules 1-7: Full Angular Unit Tests
runStep(
  'Modules 1 - 7: Run Angular Vitest Suite (Components, Services, Directives, RxJS, Mock HTTP)',
  'npm test -- --watch=false',
  APP_DIR
);

// 4. Production Build Verification (Exp 7.9, 7.10)
runStep(
  'Module 7 / Exp 7.10: Production Ahead-Of-Time (AOT) Build with Code Splitting',
  'npm run build',
  APP_DIR
);

console.log('\n================================================================');
console.log(`🏁 TEST EXECUTION SUMMARY: ${passedCount}/${totalCount} TESTS PASSED`);
console.log('================================================================\n');

if (passedCount === totalCount) {
  console.log('🎉 ALL EXPERIMENTS PASSED SUCCESSFULLY!');
  process.exit(0);
} else {
  console.error('⚠️ Some tests failed.');
  process.exit(1);
}
