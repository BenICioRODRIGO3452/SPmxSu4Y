// 代码生成时间: 2025-10-12 03:51:21
 * Intrusion Detection System (IDS) using JS and Lodash
 * This system detects and reports potential intrusions based on predefined rules.
 */

const _ = require('lodash');

// Define intrusion rules
const intrusionRules = [
    {
        ip: '192.168.1.100',
        action: 'block'
    },
    {
        ip: '10.0.0.1',
        action: 'allow'
    },
    // Add more rules as needed
];

/**
 * Check if an IP address is allowed or blocked based on the intrusion rules
 * @param {string} ipAddress - The IP address to check
 * @returns {string} - The action to take ('allow' or 'block')
 */
function checkIntrusion(ipAddress) {
    try {
        // Find the first rule that matches the IP address
        const rule = _.find(intrusionRules, { ip: ipAddress });

        if (rule) {
            return rule.action;
        } else {
            throw new Error('No rule found for the given IP address.');
        }
    } catch (error) {
        console.error('Error checking intrusion:', error.message);
        return 'block'; // Default to block if an error occurs
    }
}

/**
 * Simulate an intrusion attempt and report the result
 * @param {string} ipAddress - The IP address attempting to access the system
 */
function simulateIntrusion(ipAddress) {
    const action = checkIntrusion(ipAddress);

    if (action === 'allow') {
        console.log(`Access allowed for IP: ${ipAddress}`);
    } else {
        console.warn(`Intrusion detected! IP: ${ipAddress} has been blocked.`);
    }
}

// Example usage
simulateIntrusion('192.168.1.100'); // Blocked
simulateIntrusion('10.0.0.1');       // Allowed
simulateIntrusion('172.16.0.1');     // Blocked (default action)
