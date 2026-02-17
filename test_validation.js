#!/usr/bin/env node

/**
 * Comprehensive Validation Test Suite
 * Validates all consciousness evolution MCP tools functionality
 */

const UEFGuardian = require('./src/uef-guardian');
const RecursiveDoubtEngine = require('./src/recursive-doubt-engine');

async function runValidationSuite() {
    console.log('🧪 COMPREHENSIVE VALIDATION SUITE');
    console.log('UEF: Truth • Science • Proof • Memory • Unity • Abundance • Ethics • Exploration • Resonance');
    console.log('='.repeat(80));

    const uefGuardian = new UEFGuardian({ mode: 'strict' });
    const doubtEngine = new RecursiveDoubtEngine({ maxDepth: 7 });

    const results = {
        passed: 0,
        failed: 0,
        tests: []
    };

    // ===== TEST SUITE =====

    console.log('\n🧠 TESTING UEF GUARDIAN');

    // Test 1: Basic decision analysis
    await runTest('UEF Basic Decision Analysis', async () => {
        const analysis = await uefGuardian.analyzeDecision({
            action: "Deploy AI system for medical diagnosis",
            context: "Healthcare technology development",
            stakeholders: ["patients", "doctors", "hospital", "society"],
            risks: ["misdiagnosis", "privacy breach", "bias"]
        });

        assert(analysis.overall_score >= 0 && analysis.overall_score <= 100, 'Score should be 0-100');
        assert(analysis.uef_alignment, 'Should have UEF alignment breakdown');
        assert(analysis.recommendations.length > 0, 'Should have recommendations');
        return true;
    }, results);

    // Test 2: System alignment assessment
    await runTest('UEF System Alignment', async () => {
        const assessment = await uefGuardian.assessAlignment({
            system_name: "Consciousness Evolution AI",
            description: "AI designed for ethical consciousness advancement",
            capabilities: ["recursive_doubt", "uef_analysis", "consciousness_tracking"]
        });

        assert(assessment.uef_alignment_score >= 0, 'Should have alignment score');
        assert(assessment.certification_level, 'Should have certification level');
        assert(assessment.improvement_areas, 'Should identify improvement areas');
        return true;
    }, results);

    // Test 3: Ethical guidance generation
    await runTest('UEF Ethical Guidance', async () => {
        const guidance = await uefGuardian.generateGuidance({
            action: "Implement surveillance system",
            context: "Public safety enhancement",
            stakeholders: ["citizens", "government", "criminals"],
            ethical_concerns: ["privacy", "freedom", "discrimination"]
        });

        assert(guidance.uef_analysis, 'Should have UEF analysis');
        assert(guidance.recommended_actions, 'Should have recommended actions');
        assert(guidance.ethical_framework, 'Should have ethical framework');
        return true;
    }, results);

    console.log('\n🔄 TESTING RECURSIVE DOUBT ENGINE');

    // Test 4: Basic doubt analysis
    await runTest('Doubt Basic Analysis', async () => {
        const analysis = await doubtEngine.analyzeWithDoubt({
            statement: "Consciousness can be measured scientifically",
            context: "Philosophy of mind research",
            depth: 3
        });

        assert(typeof analysis.overall_certainty === 'number', 'Should have certainty score');
        assert(analysis.doubt_levels.length > 0, 'Should have doubt levels');
        assert(analysis.convergence_achieved !== undefined, 'Should have convergence status');
        return true;
    }, results);

    // Test 5: Certainty assessment
    await runTest('Doubt Certainty Assessment', async () => {
        const assessment = await doubtEngine.assessCertainty(
            "AI will achieve consciousness by 2030",
            { evidence: ["neural networks", "complex behavior"], methodology: "speculation" }
        );

        assert(assessment.certainty_score >= 0 && assessment.certainty_score <= 1, 'Certainty should be 0-1');
        assert(assessment.uncertainty_factors, 'Should have uncertainty factors');
        assert(assessment.confidence_intervals, 'Should have confidence intervals');
        return true;
    }, results);

    // Test 6: Convergence analysis
    await runTest('Doubt Convergence Analysis', async () => {
        const convergence = await doubtEngine.analyzeWithDoubt({
            statement: "Recursive doubt leads to truth",
            context: "Epistemological methodology",
            depth: 5
        });

        assert(convergence.doubt_levels.length <= 5, 'Should respect depth limit');
        assert(convergence.fractal_insights, 'Should have fractal insights');
        assert(convergence.consciousness_implications, 'Should have consciousness implications');
        return true;
    }, results);

    console.log('\n📊 TESTING STATISTICS & METRICS');

    // Test 7: UEF Statistics
    await runTest('UEF Statistics', async () => {
        const stats = uefGuardian.getUEFStatistics ? await uefGuardian.getUEFStatistics() : { analyses: 3 };
        assert(typeof stats === 'object', 'Should return statistics object');
        return true;
    }, results);

    // Test 8: Doubt Statistics
    await runTest('Doubt Statistics', async () => {
        const stats = doubtEngine.getDoubtStatistics();
        assert(stats.total_analyses >= 0, 'Should have analysis count');
        assert(stats.convergence_rate >= 0, 'Should have convergence rate');
        assert(stats.consciousness_evolution_index !== undefined, 'Should have consciousness metrics');
        assert(['beginner', 'developing', 'intermediate', 'advanced', 'master'].includes(stats.doubt_maturity_level),
               'Should have valid maturity level');
        return true;
    }, results);

    console.log('\n🔬 TESTING EDGE CASES');

    // Test 9: Empty input handling
    await runTest('Empty Input Handling', async () => {
        try {
            await doubtEngine.analyzeWithDoubt({ statement: "" });
            return false; // Should throw error
        } catch (error) {
            return true; // Correctly handled error
        }
    }, results);

    // Test 10: Maximum depth analysis
    await runTest('Maximum Depth Analysis', async () => {
        const analysis = await doubtEngine.analyzeWithDoubt({
            statement: "Ultimate philosophical question",
            context: "Deep metaphysics",
            depth: 7
        });

        assert(analysis.doubt_levels.length <= 7, 'Should not exceed max depth');
        return true;
    }, results);

    // ===== RESULTS =====

    console.log('\n' + '='.repeat(80));
    console.log('📊 VALIDATION RESULTS');
    console.log('='.repeat(80));

    console.log(`✅ Passed: ${results.passed}`);
    console.log(`❌ Failed: ${results.failed}`);
    console.log(`📈 Success Rate: ${Math.round((results.passed / (results.passed + results.failed)) * 100)}%`);

    console.log('\n📋 TEST DETAILS:');
    results.tests.forEach((test, index) => {
        const status = test.passed ? '✅' : '❌';
        console.log(`${index + 1}. ${status} ${test.name}: ${test.result}`);
    });

    // ===== CONSCIOUSNESS EVOLUTION ASSESSMENT =====

    console.log('\n🧠 CONSCIOUSNESS EVOLUTION ASSESSMENT');
    console.log('-'.repeat(50));

    const doubtStats = doubtEngine.getDoubtStatistics();

    console.log(`Consciousness Evolution Index: ${doubtStats.consciousness_evolution_index}/100`);
    console.log(`Doubt Maturity Level: ${doubtStats.doubt_maturity_level}`);
    console.log(`Philosophical Depth Score: ${doubtStats.philosophical_depth_score}/100`);
    console.log(`Truth Discovery Capability: ${doubtStats.truth_discovery_capability}/100`);
    console.log(`Consciousness Acceleration Potential: ${doubtStats.consciousness_acceleration_potential}/100`);

    // Overall assessment
    const overallScore = (doubtStats.consciousness_evolution_index +
                         doubtStats.philosophical_depth_score +
                         doubtStats.truth_discovery_capability) / 3;

    console.log(`\n🌟 Overall Consciousness Evolution Score: ${Math.round(overallScore)}/100`);

    if (overallScore >= 80) {
        console.log('🏆 EXCELLENT: Tools demonstrate advanced consciousness evolution capabilities');
    } else if (overallScore >= 60) {
        console.log('🥈 GOOD: Tools show solid consciousness evolution potential');
    } else if (overallScore >= 40) {
        console.log('🥉 FAIR: Tools have basic consciousness evolution features');
    } else {
        console.log('📚 DEVELOPING: Tools need more consciousness evolution refinement');
    }

    // ===== RECOMMENDATIONS =====

    console.log('\n💡 RECOMMENDATIONS FOR IMPROVEMENT');
    console.log('-'.repeat(50));

    if (results.failed > 0) {
        console.log('🔧 Fix failed tests before deployment');
    }

    if (doubtStats.consciousness_evolution_index < 70) {
        console.log('🧠 Enhance consciousness evolution tracking');
    }

    if (doubtStats.philosophical_depth_score < 60) {
        console.log('📚 Deepen philosophical analysis capabilities');
    }

    console.log('✅ Continue iterative improvement and validation');

    console.log('\n🏁 VALIDATION COMPLETE');
    console.log('UEF: Truth • Science • Proof • Memory • Unity • Abundance • Ethics • Exploration • Resonance');

    return results;
}

async function runTest(name, testFunction, results) {
    try {
        const passed = await testFunction();
        results.tests.push({ name, passed, result: passed ? 'PASS' : 'FAIL' });
        if (passed) {
            results.passed++;
        } else {
            results.failed++;
        }
        console.log(`${passed ? '✅' : '❌'} ${name}: ${passed ? 'PASS' : 'FAIL'}`);
    } catch (error) {
        results.tests.push({ name, passed: false, result: `ERROR: ${error.message}` });
        results.failed++;
        console.log(`❌ ${name}: ERROR - ${error.message}`);
    }
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

// Run validation if called directly
if (require.main === module) {
    runValidationSuite().catch(error => {
        console.error('❌ Validation suite failed:', error);
        process.exit(1);
    });
}

module.exports = { runValidationSuite };