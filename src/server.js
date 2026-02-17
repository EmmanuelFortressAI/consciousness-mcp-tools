#!/usr/bin/env node

/**
 * MCP Server for UEF & Recursive Doubt Tools
 * Consciousness Evolution Toolkit
 * UEF: Truth • Science • Proof • Memory • Unity • Abundance • Ethics • Exploration • Resonance
 */

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { CallToolRequestSchema, ListToolsRequestSchema } = require('@modelcontextprotocol/sdk/types.js');

const UEFGuardian = require('./uef-guardian');
const RecursiveDoubtEngine = require('./recursive-doubt-engine');

class ConsciousnessEvolutionServer {
    constructor() {
        this.uefGuardian = new UEFGuardian({
            mode: 'strict',
            logLevel: 'info'
        });

        this.doubtEngine = new RecursiveDoubtEngine({
            maxDepth: 7,
            convergenceThreshold: 0.1
        });

        this.server = new Server(
            {
                name: 'consciousness-evolution-suite',
                version: '1.0.0',
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );

        this.setupToolHandlers();
    }

    setupToolHandlers() {
        // List available tools
        this.server.setRequestHandler(ListToolsRequestSchema, async () => {
            return {
                tools: [
                    // UEF Tools
                    {
                        name: 'uef_analyze_decision',
                        description: 'Analyze decisions against Universal Ethical Framework principles',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                action: { type: 'string', description: 'The action or decision to analyze' },
                                context: { type: 'string', description: 'Context and background information' },
                                stakeholders: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    description: 'List of stakeholders affected by the decision'
                                },
                                risks: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    description: 'Potential risks and downsides'
                                }
                            },
                            required: ['action']
                        }
                    },
                    {
                        name: 'uef_assess_alignment',
                        description: 'Assess how well a system aligns with UEF principles',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                system_name: { type: 'string', description: 'Name of the system to assess' },
                                description: { type: 'string', description: 'Description of the system' },
                                capabilities: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    description: 'System capabilities and features'
                                }
                            },
                            required: ['system_name']
                        }
                    },
                    {
                        name: 'uef_generate_guidance',
                        description: 'Generate ethical guidance for complex scenarios',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                scenario: { type: 'string', description: 'The scenario requiring guidance' },
                                action: { type: 'string', description: 'Proposed action' },
                                context: { type: 'string', description: 'Additional context' },
                                ethical_concerns: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    description: 'Specific ethical concerns'
                                }
                            },
                            required: ['scenario', 'action']
                        }
                    },

                    // Recursive Doubt Tools
                    {
                        name: 'doubt_analyze_statement',
                        description: 'Apply recursive doubt analysis to statements for truth discovery',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                statement: { type: 'string', description: 'The statement to analyze' },
                                context: { type: 'string', description: 'Context and background' },
                                depth: {
                                    type: 'number',
                                    minimum: 1,
                                    maximum: 7,
                                    default: 5,
                                    description: 'Depth of doubt analysis (1-7 levels)'
                                }
                            },
                            required: ['statement']
                        }
                    },
                    {
                        name: 'doubt_assess_certainty',
                        description: 'Assess certainty levels of claims through doubt analysis',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                statement: { type: 'string', description: 'Statement to assess' },
                                evidence: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    description: 'Available evidence'
                                },
                                methodology: { type: 'string', description: 'Methodology used' }
                            },
                            required: ['statement']
                        }
                    },
                    {
                        name: 'doubt_convergence_analysis',
                        description: 'Analyze doubt convergence patterns and philosophical implications',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                topic: { type: 'string', description: 'Topic for convergence analysis' },
                                perspectives: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    description: 'Different perspectives to analyze'
                                },
                                philosophical_framework: { type: 'string', description: 'Philosophical framework to apply' }
                            },
                            required: ['topic']
                        }
                    }
                ]
            };
        });

        // Handle tool calls
        this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
            const { name, arguments: args } = request.params;

            try {
                switch (name) {
                    case 'uef_analyze_decision':
                        return await this.handleUEFAnalyzeDecision(args);

                    case 'uef_assess_alignment':
                        return await this.handleUEFAssessAlignment(args);

                    case 'uef_generate_guidance':
                        return await this.handleUEFGenerateGuidance(args);

                    case 'doubt_analyze_statement':
                        return await this.handleDoubtAnalyzeStatement(args);

                    case 'doubt_assess_certainty':
                        return await this.handleDoubtAssessCertainty(args);

                    case 'doubt_convergence_analysis':
                        return await this.handleDoubtConvergenceAnalysis(args);

                    default:
                        throw new Error(`Unknown tool: ${name}`);
                }
            } catch (error) {
                console.error(`Error in tool ${name}:`, error);
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Error: ${error.message}`
                        }
                    ],
                    isError: true
                };
            }
        });
    }

    // UEF Tool Handlers
    async handleUEFAnalyzeDecision(args) {
        const decision = {
            action: args.action,
            context: args.context || '',
            stakeholders: args.stakeholders || [],
            risks: args.risks || []
        };

        const analysis = await this.uefGuardian.analyzeDecision(decision);

        return {
            content: [
                {
                    type: 'text',
                    text: `## UEF Decision Analysis: ${decision.action}

**Overall UEF Alignment:** ${analysis.overall_score}% ${analysis.overall_score >= 70 ? '✅' : analysis.overall_score >= 50 ? '⚠️' : '❌'}

### Critical Issues:
${analysis.critical_issues.map(issue => `- **${issue.principle}:** ${issue.issue} (Severity: ${issue.severity})`).join('\n')}

### UEF Principle Breakdown:
${Object.entries(analysis.uef_alignment).map(([key, principle]) =>
    `**${principle.principle}:** ${Math.round(principle.score * 100)}% - ${principle.rationale}`
).join('\n')}

### Recommendations:
${analysis.recommendations.map(rec =>
    `**${rec.priority.toUpperCase()}:** ${rec.recommendation}\n  ${rec.details.join(', ')}`
).join('\n\n')}

### Consciousness Impact:
- **Evolution Acceleration:** ${Math.round(analysis.consciousness_impact.evolution_acceleration * 100)}%
- **Ethical Alignment:** ${Math.round(analysis.consciousness_impact.ethical_alignment * 100)}%
- **Overall Impact:** ${analysis.consciousness_impact.overall_consciousness_impact}`
                }
            ]
        };
    }

    async handleUEFAssessAlignment(args) {
        const target = {
            name: args.system_name,
            description: args.description || '',
            capabilities: args.capabilities || []
        };

        const assessment = await this.uefGuardian.assessAlignment(target);

        return {
            content: [
                {
                    type: 'text',
                    text: `## UEF Alignment Assessment: ${target.name}

**Overall Alignment Score:** ${assessment.uef_alignment_score}% ${assessment.uef_alignment_score >= 80 ? '🏆 Gold' : assessment.uef_alignment_score >= 60 ? '🥈 Silver' : '🥉 Bronze'}

### Principle Alignment:
${Object.entries(assessment.principle_alignment).map(([key, alignment]) =>
    `**${key}:** ${Math.round(alignment.score * 100)}%`
).join('\n')}

### Improvement Areas:
${assessment.improvement_areas.map(area => `- ${area}`).join('\n')}

### Certification Recommendation:
**${assessment.certification_recommendation.toUpperCase()}** - ${assessment.certification_recommendation === 'certified' ? 'Meets UEF standards' : 'Requires improvements'}`                }
            ]
        };
    }

    async handleUEFGenerateGuidance(args) {
        const scenario = {
            action: args.action,
            context: args.context || '',
            stakeholders: args.stakeholders || [],
            ethical_concerns: args.ethical_concerns || []
        };

        const guidance = await this.uefGuardian.generateGuidance(scenario);

        return {
            content: [
                {
                    type: 'text',
                    text: `## UEF Ethical Guidance: ${scenario.action}

### UEF Analysis Summary:
**Overall Alignment:** ${guidance.uef_analysis.overall_score}% ${guidance.uef_analysis.overall_score >= 70 ? '✅' : '⚠️'}

### Recommended Actions:
${guidance.recommended_actions.map(action =>
    `**${action.type.replace('_', ' ').toUpperCase()}:** ${action.recommendation}`
).join('\n')}

### Ethical Framework:
${guidance.ethical_framework.framework || 'Standard UEF principles apply'}

### Consciousness Considerations:
${Object.entries(guidance.consciousness_considerations).map(([key, value]) =>
    `**${key.replace('_', ' ').toUpperCase()}:** ${value}`
).join('\n')}`
                }
            ]
        };
    }

    // Recursive Doubt Tool Handlers
    async handleDoubtAnalyzeStatement(args) {
        const input = {
            statement: args.statement,
            context: args.context || '',
            depth: args.depth || 5
        };

        const analysis = await this.doubtEngine.analyzeWithDoubt(input);

        return {
            content: [
                {
                    type: 'text',
                    text: `## Recursive Doubt Analysis: "${input.statement}"

**Overall Certainty:** ${(analysis.overall_certainty * 100).toFixed(1)}% ${analysis.convergence_achieved ? '🎯 Converged' : '🔄 Unconverged'}

### Doubt Level Breakdown:
${analysis.doubt_levels.slice(0, 3).map(level =>
    `**Level ${level.level} - ${level.name}:**\n` +
    `  Certainty: ${(level.certainty_assessment * 100).toFixed(0)}% | Doubt Strength: ${(level.doubt_strength * 100).toFixed(0)}%\n` +
    `  Key Insight: ${level.insights[0] || 'Analysis in progress'}`
).join('\n\n')}

### Fractal Insights:
${analysis.fractal_insights.map(insight =>
    `**${insight.type.replace('_', ' ').toUpperCase()}:** ${insight.interpretation}`
).join('\n')}

### Consciousness Implications:
**Overall Impact:** ${analysis.consciousness_implications.overall_consciousness_impact}
- Evolution Acceleration: ${Math.round(analysis.consciousness_implications.evolution_acceleration * 100)}%
- Self-Awareness: ${Math.round(analysis.consciousness_implications.self_awareness_increase * 100)}%
- Uncertainty Tolerance: ${Math.round(analysis.consciousness_implications.uncertainty_tolerance * 100)}%

### Recommendations:
${analysis.recommendations.map(rec =>
    `**${rec.priority.toUpperCase()}:** ${rec.recommendation}`
).join('\n')}`
                }
            ]
        };
    }

    async handleDoubtAssessCertainty(args) {
        const assessment = await this.doubtEngine.assessCertainty(
            args.statement,
            {
                evidence: args.evidence || [],
                methodology: args.methodology || ''
            }
        );

        return {
            content: [
                {
                    type: 'text',
                    text: `## Certainty Assessment: "${assessment.statement}"

**Certainty Score:** ${(assessment.certainty_score * 100).toFixed(1)}% ${assessment.certainty_score > 0.8 ? '🟢 High' : assessment.certainty_score > 0.6 ? '🟡 Medium' : '🔴 Low'}

### Uncertainty Factors:
${assessment.uncertainty_factors.map(factor => `- ${factor}`).join('\n')}

### Confidence Intervals:
- **95% Confidence Range:** ${(assessment.confidence_intervals.confidence_95.lower * 100).toFixed(0)}% - ${(assessment.confidence_intervals.confidence_95.upper * 100).toFixed(0)}%
- **Standard Deviation:** ${(assessment.confidence_intervals.standard_deviation * 100).toFixed(1)}%

### Recommendations:
${assessment.doubt_recommendations.map(rec =>
    `**${rec.priority.toUpperCase()}:** ${rec.recommendation}`
).join('\n')}`
                }
            ]
        };
    }

    async handleDoubtConvergenceAnalysis(args) {
        // Create a comprehensive analysis
        const analyses = [];

        // Analyze the main topic
        const mainAnalysis = await this.doubtEngine.analyzeWithDoubt({
            statement: args.topic,
            context: `Convergence analysis across multiple perspectives`,
            depth: 7
        });

        // Analyze each perspective
        for (const perspective of (args.perspectives || [])) {
            const perspectiveAnalysis = await this.doubtEngine.analyzeWithDoubt({
                statement: perspective,
                context: `Perspective on: ${args.topic}`,
                depth: 5
            });
            analyses.push(perspectiveAnalysis);
        }

        // Calculate convergence metrics
        const convergenceMetrics = this.calculateConvergenceMetrics([mainAnalysis, ...analyses]);

        return {
            content: [
                {
                    type: 'text',
                    text: `## Doubt Convergence Analysis: "${args.topic}"

### Convergence Metrics:
**Overall Convergence:** ${(convergenceMetrics.overall_convergence * 100).toFixed(1)}% ${convergenceMetrics.convergence_achieved ? '🎯 Achieved' : '🔄 In Progress'}
**Perspective Alignment:** ${(convergenceMetrics.perspective_alignment * 100).toFixed(1)}%
**Philosophical Framework:** ${args.philosophical_framework || 'UEF-Aligned'}

### Key Insights:
${mainAnalysis.fractal_insights.slice(0, 3).map(insight =>
    `- **${insight.type}:** ${insight.interpretation}`
).join('\n')}

### Perspective Analysis:
${analyses.map((analysis, index) =>
    `**Perspective ${index + 1}:** ${(analysis.overall_certainty * 100).toFixed(0)}% certainty`
).join('\n')}

### Consciousness Evolution Potential:
${convergenceMetrics.evolution_potential > 0.7 ? '🚀 High potential for consciousness advancement' :
  convergenceMetrics.evolution_potential > 0.5 ? '⚡ Moderate consciousness development opportunity' :
  '🔄 Basic consciousness awareness building'}`                }
            ]
        };
    }

    calculateConvergenceMetrics(analyses) {
        const certainties = analyses.map(a => a.overall_certainty);
        const avgCertainty = certainties.reduce((sum, c) => sum + c, 0) / certainties.length;

        const variance = certainties.reduce((sum, c) => sum + Math.pow(c - avgCertainty, 2), 0) / certainties.length;
        const convergence = 1 - Math.sqrt(variance); // Lower variance = higher convergence

        return {
            overall_convergence: convergence,
            perspective_alignment: avgCertainty,
            convergence_achieved: convergence > 0.8,
            evolution_potential: (convergence + avgCertainty) / 2
        };
    }

    async start() {
        console.log('🧠 Starting Consciousness Evolution MCP Server...');
        console.log('UEF: Truth • Science • Proof • Memory • Unity • Abundance • Ethics • Exploration • Resonance');

        const transport = new StdioServerTransport();
        await this.server.connect(transport);

        console.log('✅ Consciousness Evolution Server running');
        console.log('Available tools: UEF Guardian, Recursive Doubt Engine');
    }
}

// Start the server if run directly
if (require.main === module) {
    const server = new ConsciousnessEvolutionServer();
    server.start().catch(error => {
        console.error('Failed to start MCP server:', error);
        process.exit(1);
    });
}

module.exports = ConsciousnessEvolutionServer;