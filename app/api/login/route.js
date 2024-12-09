import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  const { email, password } = await req.json();

  // Dummy credentials validation
  if (email === 'admin@example.com' && password === 'password') {
    const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });

    // Set token as an HttpOnly cookie
    return NextResponse.json({ message: 'Login successful' }, {
      headers: { 'Set-Cookie': `token=${token}; Path=/; HttpOnly; Secure;` },
    });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
