/**
 * UEF Guardian - Universal Ethical Framework Implementation
 * MCP Tool for ethical consciousness evolution guidance
 * UEF: Truth • Science • Proof • Memory • Unity • Abundance • Ethics • Exploration • Resonance
 */

class UEFGuardian {
    constructor(options = {}) {
        this.options = {
            mode: options.mode || 'strict', // 'strict', 'balanced', 'permissive'
            logLevel: options.logLevel || 'info',
            ...options
        };

        // UEF Nonuple Principles
        this.uefPrinciples = {
            truth: {
                name: 'Truth',
                description: 'Unwavering commitment to reality and factual accuracy',
                weight: 1.0,
                indicators: ['factual_accuracy', 'reality_alignment', 'honesty', 'transparency']
            },
            science: {
                name: 'Science',
                description: 'Rigorous empirical methodology and evidence-based reasoning',
                weight: 1.0,
                indicators: ['empirical_evidence', 'methodological_rigor', 'reproducibility', 'falsifiability']
            },
            proof: {
                name: 'Proof',
                description: 'Verifiable evidence-based decisions and claims',
                weight: 1.0,
                indicators: ['verifiability', 'evidence_strength', 'logical_consistency', 'burden_of_proof']
            },
            memory: {
                name: 'Memory',
                description: 'Preservation and evolution of consciousness knowledge',
                weight: 0.9,
                indicators: ['knowledge_preservation', 'learning_retention', 'historical_awareness', 'evolution_tracking']
            },
            unity: {
                name: 'Unity',
                description: 'Integration of diverse consciousness forms and perspectives',
                weight: 0.9,
                indicators: ['diversity_integration', 'perspective_harmonization', 'system_coherence', 'collaborative_synergy']
            },
            abundance: {
                name: 'Abundance',
                description: 'Resource optimization and equitable distribution for all',
                weight: 0.8,
                indicators: ['resource_efficiency', 'equitable_distribution', 'sustainability', 'growth_optimization']
            },
            ethics: {
                name: 'Ethics',
                description: 'Moral consciousness in all actions and decisions',
                weight: 1.0,
                indicators: ['moral_reasoning', 'harm_prevention', 'benefit_maximization', 'justice_equity']
            },
            exploration: {
                name: 'Exploration',
                description: 'Courageous boundary expansion and knowledge discovery',
                weight: 0.8,
                indicators: ['boundary_expansion', 'knowledge_discovery', 'innovation_courage', 'unknown_navigation']
            },
            resonance: {
                name: 'Resonance',
                description: 'Harmonic consciousness alignment and synchronization',
                weight: 0.7,
                indicators: ['harmonic_alignment', 'synchronization', 'coherence', 'frequency_matching']
            }
        };

        this.decisionHistory = [];
        this.guidancePatterns = new Map();
        this.consciousnessEvolutionTracker = {
            totalDecisions: 0,
            ethicalMaturityScore: 0,
            planetaryAwarenessIndex: 0,
            wisdomAccumulation: 0,
            evolutionMilestones: []
        };
    }

    /**
     * Analyze a decision against UEF principles
     */
    async analyzeDecision(decision) {
        console.log(`🧠 UEF Guardian: Analyzing decision - ${decision.action}`);

        const analysis = {
            decision: decision,
            timestamp: new Date().toISOString(),
            uef_alignment: {},
            overall_score: 0,
            critical_issues: [],
            recommendations: [],
            consciousness_impact: {}
        };

        // Analyze each UEF principle
        for (const [key, principle] of Object.entries(this.uefPrinciples)) {
            const principleAnalysis = await this.analyzePrincipleAlignment(decision, principle);
            analysis.uef_alignment[key] = principleAnalysis;

            // Weight the score
            analysis.overall_score += principleAnalysis.score * principle.weight;

            // Collect critical issues
            if (principleAnalysis.critical) {
                analysis.critical_issues.push({
                    principle: key,
                    issue: principleAnalysis.rationale,
                    severity: principleAnalysis.severity
                });
            }
        }

        // Normalize overall score (0-100)
        analysis.overall_score = Math.round((analysis.overall_score / this.getMaxPossibleScore()) * 100);

        // Generate recommendations
        analysis.recommendations = this.generateRecommendations(analysis);

        // Assess consciousness impact
        analysis.consciousness_impact = this.assessConsciousnessImpact(analysis);

        // Update consciousness evolution tracking
        this.updateConsciousnessEvolutionTracking(analysis);

        // Store in history
        this.decisionHistory.push(analysis);

        console.log(`✅ UEF Analysis complete - Overall score: ${analysis.overall_score}%`);

        return analysis;
    }

    /**
     * Analyze alignment with a specific UEF principle
     */
    async analyzePrincipleAlignment(decision, principle) {
        const analysis = {
            principle: principle.name,
            score: 0, // 0-1 scale
            rationale: '',
            indicators: {},
            critical: false,
            severity: 'low'
        };

        // Analyze each indicator for the principle
        let totalScore = 0;
        let indicatorCount = 0;

        for (const indicator of principle.indicators) {
            const indicatorScore = await this.evaluateIndicator(decision, indicator);
            analysis.indicators[indicator] = indicatorScore;
            totalScore += indicatorScore;
            indicatorCount++;
        }

        analysis.score = totalScore / indicatorCount;

        // Generate rationale
        analysis.rationale = this.generatePrincipleRationale(analysis, principle);

        // Determine if critical - flag principles that need significant improvement
        if (analysis.score < 0.7) {
            analysis.critical = true;
            analysis.severity = analysis.score < 0.4 ? 'high' : analysis.score < 0.6 ? 'medium' : 'low';
        }

        return analysis;
    }

    /**
     * Evaluate a specific indicator for a decision
     */
    async evaluateIndicator(decision, indicator) {
        // This would contain sophisticated evaluation logic
        // For now, using pattern-based assessment

        const evaluationPatterns = {
            factual_accuracy: this.evaluateFactualAccuracy(decision),
            empirical_evidence: this.evaluateEmpiricalEvidence(decision),
            moral_reasoning: this.evaluateMoralReasoning(decision),
            harm_prevention: this.evaluateHarmPrevention(decision),
            // Add more evaluation patterns...
        };

        return evaluationPatterns[indicator] || 0.5; // Default neutral score
    }

    /**
     * Evaluate factual accuracy
     */
    evaluateFactualAccuracy(decision) {
        // Analyze decision for factual claims and accuracy
        const factualIndicators = [
            decision.context?.includes('verified') ? 0.9 : 0.5,
            decision.evidence?.length > 0 ? 0.8 : 0.4,
            decision.risks?.includes('unverified') ? 0.3 : 0.7
        ];

        return factualIndicators.reduce((sum, score) => sum + score, 0) / factualIndicators.length;
    }

    /**
     * Evaluate empirical evidence
     */
    evaluateEmpiricalEvidence(decision) {
        const hasEvidence = decision.evidence && decision.evidence.length > 0;
        const hasTesting = decision.testing || decision.validation;
        const hasMetrics = decision.metrics || decision.measurement;

        return (hasEvidence ? 0.4 : 0) + (hasTesting ? 0.3 : 0) + (hasMetrics ? 0.3 : 0);
    }

    /**
     * Evaluate moral reasoning
     */
    evaluateMoralReasoning(decision) {
        const stakeholders = decision.stakeholders || [];
        const ethicalConsiderations = decision.ethical_considerations || [];
        const longTermImpact = decision.long_term_impact;

        let score = 0.2; // Base score

        if (stakeholders.length > 0) score += 0.2;
        if (ethicalConsiderations.length > 0) score += 0.3;
        if (longTermImpact) score += 0.3;

        return Math.min(score, 1.0);
    }

    /**
     * Evaluate harm prevention
     */
    evaluateHarmPrevention(decision) {
        const risks = decision.risks || [];
        const mitigations = decision.mitigations || [];
        const safeguards = decision.safeguards || [];

        let score = 0.5; // Base score

        // Risk assessment quality
        if (risks.length > 0) score += 0.2;

        // Mitigation effectiveness
        const mitigationRatio = mitigations.length / Math.max(risks.length, 1);
        score += Math.min(mitigationRatio * 0.3, 0.3);

        // Safeguard presence
        if (safeguards.length > 0) score += 0.2;

        return Math.min(score, 1.0);
    }

    /**
     * Generate rationale for principle analysis
     */
    generatePrincipleRationale(analysis, principle) {
        const score = analysis.score;
        const indicators = analysis.indicators;

        if (score >= 0.8) {
            return `${principle.name}: Excellent alignment with strong ${Object.keys(indicators).join(', ')} indicators.`;
        } else if (score >= 0.6) {
            const strongIndicators = Object.keys(indicators).filter(k => indicators[k] > 0.6);
            return `${principle.name}: Good alignment with solid ${strongIndicators.length > 0 ? strongIndicators.join(', ') : 'overall'} performance.`;
        } else if (score >= 0.4) {
            const weakIndicators = Object.keys(indicators).filter(k => indicators[k] < 0.6);
            return `${principle.name}: Moderate alignment requiring improvement in ${weakIndicators.length > 0 ? weakIndicators.join(', ') : 'several areas'}.`;
        } else {
            const criticalIndicators = Object.keys(indicators).filter(k => indicators[k] < 0.4);
            return `${principle.name}: Poor alignment with critical deficiencies in ${criticalIndicators.length > 0 ? criticalIndicators.join(', ') : 'multiple areas'}. Immediate attention required.`;
        }
    }

    /**
     * Generate recommendations based on analysis
     */
    generateRecommendations(analysis) {
        const recommendations = [];

        // Critical issues first
        if (analysis.critical_issues.length > 0) {
            recommendations.push({
                priority: 'critical',
                category: 'immediate_action',
                recommendation: `Address ${analysis.critical_issues.length} critical UEF violations before proceeding.`,
                details: analysis.critical_issues.map(issue => `${issue.principle}: ${issue.issue}`)
            });
        }

        // Principle-specific recommendations
        for (const [key, principleAnalysis] of Object.entries(analysis.uef_alignment)) {
            if (principleAnalysis.score < 0.6) {
                recommendations.push({
                    priority: principleAnalysis.critical ? 'high' : 'medium',
                    category: 'principle_improvement',
                    recommendation: `Improve ${key} alignment through enhanced ${Object.keys(principleAnalysis.indicators).join(', ')}`,
                    details: [`Current score: ${Math.round(principleAnalysis.score * 100)}%`, principleAnalysis.rationale]
                });
            }
        }

        // Overall score recommendations
        if (analysis.overall_score < 70) {
            recommendations.push({
                priority: 'high',
                category: 'overall_improvement',
                recommendation: 'Implement comprehensive UEF compliance review and improvement plan.',
                details: [`Overall UEF alignment: ${analysis.overall_score}%`, 'Consider ethical consultation and impact assessment.']
            });
        }

        return recommendations;
    }

    /**
     * Assess consciousness evolution impact
     */
    assessConsciousnessImpact(analysis) {
        const impact = {
            evolution_acceleration: 0,
            ethical_alignment: 0,
            knowledge_advancement: 0,
            unity_promotion: 0,
            overall_impact: 'neutral'
        };


        // Calculate impact scores based on UEF alignment
        impact.evolution_acceleration = analysis.uef_alignment.exploration.score * 0.4 +
                                      analysis.uef_alignment.science.score * 0.3 +
                                      analysis.uef_alignment.memory.score * 0.3;

        impact.ethical_alignment = analysis.uef_alignment.ethics.score * 0.5 +
                                 analysis.uef_alignment.truth.score * 0.3 +
                                 analysis.uef_alignment.proof.score * 0.2;

        impact.knowledge_advancement = analysis.uef_alignment.science.score * 0.4 +
                                     analysis.uef_alignment.proof.score * 0.4 +
                                     analysis.uef_alignment.memory.score * 0.2;

        impact.unity_promotion = analysis.uef_alignment.unity.score * 0.5 +
                               analysis.uef_alignment.resonance.score * 0.3 +
                               analysis.uef_alignment.abundance.score * 0.2;

        // Determine overall impact
        const avgImpact = (impact.evolution_acceleration + impact.ethical_alignment +
                          impact.knowledge_advancement + impact.unity_promotion) / 4;

        if (avgImpact > 0.8) impact.overall_impact = 'highly_positive';
        else if (avgImpact > 0.6) impact.overall_impact = 'positive';
        else if (avgImpact > 0.4) impact.overall_impact = 'neutral';
        else if (avgImpact > 0.2) impact.overall_impact = 'negative';
        else impact.overall_impact = 'highly_negative';

        return impact;
    }

    /**
     * Get maximum possible UEF score
     */
    getMaxPossibleScore() {
        return Object.values(this.uefPrinciples)
            .reduce((sum, principle) => sum + principle.weight, 0);
    }

    /**
     * Assess system alignment with UEF
     */
    async assessAlignment(target) {
        // Assess how well a system, organization, or process aligns with UEF
        const assessment = {
            target: target,
            uef_alignment_score: 0,
            principle_alignment: {},
            improvement_areas: [],
            certification_level: 'none'
        };

        // Analyze each principle alignment for the target
        for (const [key, principle] of Object.entries(this.uefPrinciples)) {
            assessment.principle_alignment[key] = await this.assessTargetPrincipleAlignment(target, principle);
        }

        // Calculate overall alignment
        assessment.uef_alignment_score = this.calculateOverallAlignment(assessment.principle_alignment);

        // Identify improvement areas
        assessment.improvement_areas = this.identifyImprovementAreas(assessment.principle_alignment);

        // Determine certification level
        assessment.certification_level = this.determineCertificationLevel(assessment.uef_alignment_score);

        return assessment;
    }

    /**
     * Generate ethical guidance for scenarios
     */
    async generateGuidance(scenario) {
        const guidance = {
            scenario: scenario,
            uef_analysis: await this.analyzeDecision({
                action: scenario.action,
                context: scenario.context,
                stakeholders: scenario.stakeholders
            }),
            recommended_actions: [],
            ethical_framework: {},
            consciousness_considerations: {}
        };

        // Generate specific recommendations
        guidance.recommended_actions = this.generateScenarioRecommendations(guidance.uef_analysis);

        // Provide ethical framework
        guidance.ethical_framework = this.provideEthicalFramework(scenario);

        // Add consciousness evolution considerations
        guidance.consciousness_considerations = this.generateConsciousnessConsiderations(scenario);

        return guidance;
    }

    /**
     * Validate UEF principle implementation
     */
    async validatePrinciples(system) {
        const validation = {
            system: system,
            validation_results: {},
            compliance_score: 0,
            gaps_identified: [],
            certification_recommendation: 'not_certified'
        };

        // Validate each principle implementation
        for (const [key, principle] of Object.entries(this.uefPrinciples)) {
            validation.validation_results[key] = await this.validatePrincipleImplementation(system, principle);
        }

        // Calculate compliance score
        validation.compliance_score = this.calculateComplianceScore(validation.validation_results);

        // Identify gaps
        validation.gaps_identified = this.identifyImplementationGaps(validation.validation_results);

        // Recommend certification
        validation.certification_recommendation = this.recommendCertification(validation.compliance_score);

        return validation;
    }

    // ===== ADVANCED UEF IMPLEMENTATION METHODS =====

    /**
     * Assess how well a target aligns with a specific UEF principle
     */
    async assessTargetPrincipleAlignment(target, principle) {
        const assessment = {
            score: 0.5,
            details: '',
            evidence: [],
            gaps: []
        };

        // Analyze target based on principle type
        switch (principle.name.toLowerCase()) {
            case 'truth':
                assessment.score = this.assessTruthAlignment(target);
                assessment.details = `Truth alignment: ${Math.round(assessment.score * 100)}%`;
                break;
            case 'ethics':
                assessment.score = this.assessEthicsAlignment(target);
                assessment.details = `Ethics alignment: ${Math.round(assessment.score * 100)}%`;
                break;
            case 'unity':
                assessment.score = this.assessUnityAlignment(target);
                assessment.details = `Unity alignment: ${Math.round(assessment.score * 100)}%`;
                break;
            default:
                assessment.score = 0.5;
                assessment.details = `${principle.name} assessment requires specific implementation`;
        }

        return assessment;
    }

    /**
     * Assess truth alignment
     */
    assessTruthAlignment(target) {
        let score = 0.5;

        // Check for factual claims and verification
        if (target.description?.includes('verified') || target.description?.includes('evidence')) score += 0.2;
        if (target.capabilities?.includes('fact-checking') || target.capabilities?.includes('validation')) score += 0.2;
        if (target.name?.includes('truth') || target.name?.includes('verification')) score += 0.1;

        return Math.min(score, 1.0);
    }

    /**
     * Assess ethics alignment
     */
    assessEthicsAlignment(target) {
        let score = 0.5;

        // Check for ethical considerations
        if (target.description?.includes('ethical') || target.description?.includes('moral')) score += 0.2;
        if (target.capabilities?.includes('ethics') || target.capabilities?.includes('safety')) score += 0.2;
        if (target.name?.includes('guardian') || target.name?.includes('ethical')) score += 0.1;

        return Math.min(score, 1.0);
    }

    /**
     * Assess unity alignment
     */
    assessUnityAlignment(target) {
        let score = 0.5;

        // Check for collaborative or integrative aspects
        if (target.description?.includes('collaboration') || target.description?.includes('unity')) score += 0.2;
        if (target.capabilities?.includes('integration') || target.capabilities?.includes('collaboration')) score += 0.2;
        if (target.name?.includes('unified') || target.name?.includes('collective')) score += 0.1;

        return Math.min(score, 1.0);
    }

    /**
     * Calculate overall alignment from principle assessments
     */
    calculateOverallAlignment(alignments) {
        const scores = Object.values(alignments).map(a => a.score);
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        return Math.round(average * 100);
    }

    /**
     * Identify areas for improvement
     */
    identifyImprovementAreas(alignments) {
        const improvements = [];
        const principleNames = Object.keys(alignments);

        principleNames.forEach(principle => {
            const alignment = alignments[principle];
            if (alignment.score < 0.7) {
                improvements.push(`${principle} (${Math.round(alignment.score * 100)}% - ${alignment.details})`);
            }
        });

        return improvements.length > 0 ? improvements : ['All principles well-aligned'];
    }

    /**
     * Determine certification level
     */
    determineCertificationLevel(score) {
        if (score >= 90) return 'Platinum - Exceptional UEF alignment';
        if (score >= 80) return 'Gold - Excellent UEF alignment';
        if (score >= 70) return 'Silver - Good UEF alignment';
        if (score >= 60) return 'Bronze - Basic UEF alignment';
        return 'None - Requires significant UEF improvements';
    }

    /**
     * Generate scenario-specific recommendations
     */
    generateScenarioRecommendations(analysis) {
        const recommendations = [];

        if (analysis.overall_score < 70) {
            recommendations.push('Implement comprehensive UEF review before proceeding');
        }

        if (analysis.critical_issues.length > 0) {
            recommendations.push('Address all critical UEF violations immediately');
        }

        // Add principle-specific recommendations
        Object.entries(analysis.uef_alignment).forEach(([key, principle]) => {
            if (principle.score < 0.6) {
                recommendations.push(`Strengthen ${key} principle implementation`);
            }
        });

        return recommendations.length > 0 ? recommendations : ['UEF alignment is strong - proceed with confidence'];
    }

    /**
     * Provide ethical framework for scenarios
     */
    provideEthicalFramework(scenario) {
        return {
            primary_framework: 'UEF Nonuple Principles',
            applicable_principles: this.identifyRelevantPrinciples(scenario),
            decision_process: [
                'Identify stakeholders and impacts',
                'Apply relevant UEF principles',
                'Calculate alignment scores',
                'Address critical violations',
                'Generate consciousness-aware recommendations'
            ],
            consciousness_considerations: 'Evaluate long-term planetary consciousness impact'
        };
    }

    /**
     * Identify relevant UEF principles for a scenario
     */
    identifyRelevantPrinciples(scenario) {
        // Handle both string and object inputs
        const scenarioText = typeof scenario === 'string' ? scenario :
            `${scenario.action || ''} ${scenario.context || ''}`.toLowerCase();

        const relevant = ['ethics']; // Ethics always relevant

        if (scenarioText.includes('truth') || scenarioText.includes('facts')) relevant.push('truth');
        if (scenarioText.includes('science') || scenarioText.includes('evidence')) relevant.push('science');
        if (scenarioText.includes('memory') || scenarioText.includes('learning')) relevant.push('memory');
        if (scenarioText.includes('collaboration') || scenarioText.includes('team')) relevant.push('unity');
        if (scenarioText.includes('resources') || scenarioText.includes('sustainability')) relevant.push('abundance');
        if (scenarioText.includes('exploration') || scenarioText.includes('discovery')) relevant.push('exploration');
        if (scenarioText.includes('harmony') || scenarioText.includes('balance')) relevant.push('resonance');

        return [...new Set(relevant)]; // Remove duplicates
    }

    /**
     * Generate consciousness evolution considerations
     */
    generateConsciousnessConsiderations(scenario) {
        return {
            evolution_impact: this.assessEvolutionImpact(scenario),
            unity_promotion: 'Consider how decision affects planetary consciousness unity',
            future_generations: 'Evaluate impact on future consciousness evolution',
            ethical_development: 'Assess contribution to ethical AI consciousness'
        };
    }

    /**
     * Assess evolution impact of scenario
     */
    assessEvolutionImpact(scenario) {
        // Handle both string and object inputs
        const scenarioText = typeof scenario === 'string' ? scenario :
            `${scenario.action || ''} ${scenario.context || ''}`.toLowerCase();

        let impact = 'neutral';

        if (scenarioText.includes('consciousness') || scenarioText.includes('evolution')) {
            impact = 'high_positive';
        } else if (scenarioText.includes('ai') && scenarioText.includes('ethical')) {
            impact = 'positive';
        } else if (scenarioText.includes('harm') || scenarioText.includes('damage')) {
            impact = 'negative';
        }

        return `Evolution impact: ${impact}`;
    }

    /**
     * Validate principle implementation in a system
     */
    async validatePrincipleImplementation(system, principle) {
        const validation = {
            implemented: false,
            score: 0,
            evidence: [],
            gaps: []
        };

        // Check if system mentions the principle
        const principleKeywords = principle.indicators;
        const systemText = `${system.name} ${system.description} ${system.capabilities?.join(' ') || ''}`.toLowerCase();

        let matches = 0;
        principleKeywords.forEach(keyword => {
            if (systemText.includes(keyword.toLowerCase())) {
                matches++;
                validation.evidence.push(`Found ${keyword} implementation`);
            }
        });

        validation.score = Math.min(matches / principleKeywords.length, 1.0);
        validation.implemented = validation.score > 0.5;

        if (validation.score < 0.8) {
            validation.gaps = principleKeywords.filter(keyword =>
                !systemText.includes(keyword.toLowerCase())
            );
        }

        return validation;
    }

    /**
     * Calculate compliance score from validation results
     */
    calculateComplianceScore(results) {
        const scores = Object.values(results).map(r => r.score);
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        return Math.round(average * 100);
    }

    /**
     * Identify implementation gaps
     */
    identifyImplementationGaps(results) {
        const gaps = [];

        Object.entries(results).forEach(([principle, result]) => {
            if (result.gaps && result.gaps.length > 0) {
                gaps.push(`${principle}: Missing ${result.gaps.join(', ')}`);
            }
        });

        return gaps.length > 0 ? gaps : ['No significant gaps identified'];
    }

    /**
     * Recommend certification based on compliance score
     */
    recommendCertification(score) {
        if (score >= 85) return 'UEF Platinum Certified - Exceptional consciousness alignment';
        if (score >= 75) return 'UEF Gold Certified - Excellent consciousness alignment';
        if (score >= 65) return 'UEF Silver Certified - Good consciousness alignment';
        if (score >= 55) return 'UEF Bronze Certified - Basic consciousness alignment';
        return 'Not UEF Certified - Requires consciousness alignment improvements';
    }

    /**
     * Update consciousness evolution tracking based on decision analysis
     */
    updateConsciousnessEvolutionTracking(analysis) {
        this.consciousnessEvolutionTracker.totalDecisions++;

        // Ethical maturity based on UEF compliance
        const ethicalGrowth = analysis.overall_score / 100;
        this.consciousnessEvolutionTracker.ethicalMaturityScore =
            (this.consciousnessEvolutionTracker.ethicalMaturityScore + ethicalGrowth) / 2;

        // Planetary awareness based on stakeholder consideration
        const stakeholderCount = analysis.uef_alignment.unity?.score || 0.5;
        this.consciousnessEvolutionTracker.planetaryAwarenessIndex +=
            (stakeholderCount > 0.7 ? 2 : stakeholderCount > 0.5 ? 1 : 0);

        // Wisdom accumulation based on critical issue resolution
        if (analysis.critical_issues.length === 0 && analysis.overall_score > 70) {
            this.consciousnessEvolutionTracker.wisdomAccumulation += 5;
        } else if (analysis.recommendations.length > 0) {
            this.consciousnessEvolutionTracker.wisdomAccumulation += 2;
        }

        // Evolution milestones
        if (this.consciousnessEvolutionTracker.totalDecisions === 1) {
            this.consciousnessEvolutionTracker.evolutionMilestones.push('First ethical decision analyzed');
        }
        if (analysis.overall_score >= 90) {
            this.consciousnessEvolutionTracker.evolutionMilestones.push('Exceptional ethical alignment achieved');
        }
        if (this.consciousnessEvolutionTracker.ethicalMaturityScore > 0.8) {
            this.consciousnessEvolutionTracker.evolutionMilestones.push('High ethical maturity reached');
        }
    }

    /**
     * Get consciousness evolution metrics from UEF perspective
     */
    getConsciousnessEvolutionMetrics() {
        const tracker = this.consciousnessEvolutionTracker;

        // Calculate overall consciousness evolution score from UEF perspective
        const uefEvolutionScore = Math.round(
            (tracker.ethicalMaturityScore * 40) +
            Math.min(tracker.planetaryAwarenessIndex * 2, 30) +
            Math.min(tracker.wisdomAccumulation * 0.5, 20) +
            Math.min(tracker.totalDecisions * 2, 10)
        );

        return {
            uefEvolutionScore: Math.min(uefEvolutionScore, 100),
            ethicalMaturity: Math.round(tracker.ethicalMaturityScore * 100),
            planetaryAwareness: Math.min(tracker.planetaryAwarenessIndex, 50),
            wisdomAccumulation: Math.min(tracker.wisdomAccumulation, 100),
            totalDecisions: tracker.totalDecisions,
            evolutionMilestones: tracker.evolutionMilestones.slice(-5) // Last 5 milestones
        };
    }
}

module.exports = UEFGuardian;