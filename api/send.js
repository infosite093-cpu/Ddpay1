export default async function handler(req, res) {
    // Sirf POST request allow karein
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { receiver, amount } = req.body;

    // Basic validation
    if (!receiver || !amount || amount <= 0) {
        return res.status(400).json({ 
            success: false, 
            message: 'Invalid receiver or amount' 
        });
    }

    // Bina PIN ke direct transaction ID generate karna
    const transactionId = 'DDPAY' + Date.now().toString().slice(-6) + Math.floor(10 + Math.random() * 90);

    // Yahan aap future mein apna database ya payment gateway API connect kar sakte hain
    return res.status(200).json({
        success: true,
        message: 'Payment processed without PIN',
        transactionId: transactionId,
        receiver: receiver,
        amount: amount,
        timestamp: new Date().toISOString()
    });
}
