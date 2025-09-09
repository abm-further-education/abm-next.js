import { NextRequest, NextResponse } from 'next/server';

// 프로모션 코드 데이터 (실제 환경에서는 데이터베이스에서 관리)
const PROMOTION_CODES = {
  WELCOME10: { discount: 10, description: 'Welcome discount' },
  SAVE20: { discount: 20, description: 'Save $20' },
  MULTI15: { discount: 15, description: 'Multi-course discount' },
  STUDENT25: { discount: 25, description: 'Student discount' },
  EARLYBIRD: { discount: 30, description: 'Early bird special' },
};

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json({ valid: false, error: 'Invalid code format' });
    }

    const upperCode = code.toUpperCase();
    const promotion =
      PROMOTION_CODES[upperCode as keyof typeof PROMOTION_CODES];

    if (!promotion) {
      return NextResponse.json({
        valid: false,
        error: 'Invalid promotion code',
      });
    }

    return NextResponse.json({
      valid: true,
      discount: promotion.discount,
      description: promotion.description,
      code: upperCode,
    });
  } catch (error) {
    console.error('Promotion validation error:', error);
    return NextResponse.json(
      { valid: false, error: 'Failed to validate promotion code' },
      { status: 500 }
    );
  }
}
