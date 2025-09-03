/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/u3_deposit.json`.
 */
export type U3Deposit = {
  address: 'EKxafeWX9P6QeDo61gvRftMp8bdEJkphfbH9DfVaTm4j'
  metadata: {
    name: 'u3Deposit'
    version: '0.1.0'
    spec: '0.1.0'
    description: 'Created with Anchor'
  }
  instructions: [
    {
      name: 'deposit'
      discriminator: [242, 35, 198, 137, 82, 225, 242, 182]
      accounts: [
        {
          name: 'userDeposit'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [
                  117,
                  115,
                  101,
                  114,
                  95,
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                ]
              },
              {
                kind: 'account'
                path: 'user'
              },
              {
                kind: 'account'
                path: 'depositPool'
              },
            ]
          }
        },
        {
          name: 'depositPool'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  95,
                  112,
                  111,
                  111,
                  108,
                ]
              },
              {
                kind: 'account'
                path: 'deposit_pool.usdt_mint'
                account: 'depositPool'
              },
            ]
          }
        },
        {
          name: 'usdtMint'
        },
        {
          name: 'userUsdtAccount'
          writable: true
        },
        {
          name: 'recipient'
        },
        {
          name: 'recipientUsdtAccount'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'account'
                path: 'recipient'
              },
              {
                kind: 'account'
                path: 'tokenProgram'
              },
              {
                kind: 'account'
                path: 'usdtMint'
              },
            ]
            program: {
              kind: 'const'
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ]
            }
          }
        },
        {
          name: 'user'
          writable: true
          signer: true
        },
        {
          name: 'tokenProgram'
        },
        {
          name: 'associatedTokenProgram'
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
        },
        {
          name: 'systemProgram'
          address: '11111111111111111111111111111111'
        },
      ]
      args: [
        {
          name: 'amount'
          type: 'u64'
        },
        {
          name: 'email'
          type: 'string'
        },
      ]
    },
    {
      name: 'initializePool'
      discriminator: [95, 180, 10, 172, 84, 174, 232, 40]
      accounts: [
        {
          name: 'depositPool'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  95,
                  112,
                  111,
                  111,
                  108,
                ]
              },
              {
                kind: 'account'
                path: 'usdtMint'
              },
            ]
          }
        },
        {
          name: 'usdtMint'
        },
        {
          name: 'payer'
          writable: true
          signer: true
        },
        {
          name: 'tokenProgram'
        },
        {
          name: 'systemProgram'
          address: '11111111111111111111111111111111'
        },
      ]
      args: [
        {
          name: 'recipient'
          type: 'pubkey'
        },
      ]
    },
    {
      name: 'transferAdmin'
      discriminator: [42, 242, 66, 106, 228, 10, 111, 156]
      accounts: [
        {
          name: 'depositPool'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  95,
                  112,
                  111,
                  111,
                  108,
                ]
              },
              {
                kind: 'account'
                path: 'deposit_pool.usdt_mint'
                account: 'depositPool'
              },
            ]
          }
        },
        {
          name: 'currentAdmin'
          signer: true
        },
      ]
      args: [
        {
          name: 'newAdmin'
          type: 'pubkey'
        },
      ]
    },
    {
      name: 'updateRecipient'
      discriminator: [55, 190, 61, 121, 131, 132, 8, 54]
      accounts: [
        {
          name: 'depositPool'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  95,
                  112,
                  111,
                  111,
                  108,
                ]
              },
              {
                kind: 'account'
                path: 'deposit_pool.usdt_mint'
                account: 'depositPool'
              },
            ]
          }
        },
        {
          name: 'admin'
          signer: true
        },
      ]
      args: [
        {
          name: 'newRecipient'
          type: 'pubkey'
        },
      ]
    },
  ]
  accounts: [
    {
      name: 'depositPool'
      discriminator: [64, 107, 122, 248, 155, 187, 255, 28]
    },
    {
      name: 'userDeposit'
      discriminator: [69, 238, 23, 217, 255, 137, 185, 35]
    },
  ]
  events: [
    {
      name: 'adminTransferred'
      discriminator: [255, 147, 182, 5, 199, 217, 38, 179]
    },
    {
      name: 'poolInitialized'
      discriminator: [100, 118, 173, 87, 12, 198, 254, 229]
    },
    {
      name: 'recipientUpdated'
      discriminator: [33, 28, 22, 205, 175, 9, 165, 73]
    },
    {
      name: 'usdtDeposited'
      discriminator: [140, 201, 177, 24, 230, 230, 102, 114]
    },
  ]
  errors: [
    {
      code: 6000
      name: 'invalidAmount'
      msg: 'Invalid amount'
    },
    {
      code: 6001
      name: 'unauthorized'
      msg: 'unauthorized'
    },
    {
      code: 6002
      name: 'emailEmpty'
      msg: 'Email cannot be empty'
    },
    {
      code: 6003
      name: 'emailTooLong'
      msg: 'Email is too long (max 255 characters)'
    },
    {
      code: 6004
      name: 'emailInvalidFormat'
      msg: 'Email must contain @ character'
    },
    {
      code: 6005
      name: 'invalidRecipient'
      msg: 'Invalid recipient'
    },
  ]
  types: [
    {
      name: 'adminTransferred'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'pool'
            type: 'pubkey'
          },
          {
            name: 'oldAdmin'
            type: 'pubkey'
          },
          {
            name: 'newAdmin'
            type: 'pubkey'
          },
          {
            name: 'timestamp'
            type: 'i64'
          },
        ]
      }
    },
    {
      name: 'depositPool'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'admin'
            type: 'pubkey'
          },
          {
            name: 'usdtMint'
            type: 'pubkey'
          },
          {
            name: 'recipient'
            type: 'pubkey'
          },
          {
            name: 'totalDeposited'
            type: 'u64'
          },
          {
            name: 'bump'
            type: 'u8'
          },
        ]
      }
    },
    {
      name: 'poolInitialized'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'pool'
            type: 'pubkey'
          },
          {
            name: 'admin'
            type: 'pubkey'
          },
          {
            name: 'usdtMint'
            type: 'pubkey'
          },
          {
            name: 'recipient'
            type: 'pubkey'
          },
        ]
      }
    },
    {
      name: 'recipientUpdated'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'pool'
            type: 'pubkey'
          },
          {
            name: 'admin'
            type: 'pubkey'
          },
          {
            name: 'oldRecipient'
            type: 'pubkey'
          },
          {
            name: 'newRecipient'
            type: 'pubkey'
          },
          {
            name: 'timestamp'
            type: 'i64'
          },
        ]
      }
    },
    {
      name: 'usdtDeposited'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'user'
            type: 'pubkey'
          },
          {
            name: 'pool'
            type: 'pubkey'
          },
          {
            name: 'recipient'
            type: 'pubkey'
          },
          {
            name: 'amount'
            type: 'u64'
          },
          {
            name: 'totalUserDeposit'
            type: 'u64'
          },
          {
            name: 'email'
            type: 'string'
          },
          {
            name: 'timestamp'
            type: 'i64'
          },
        ]
      }
    },
    {
      name: 'userDeposit'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'user'
            type: 'pubkey'
          },
          {
            name: 'depositPool'
            type: 'pubkey'
          },
          {
            name: 'amount'
            type: 'u64'
          },
          {
            name: 'lastDepositTime'
            type: 'i64'
          },
        ]
      }
    },
  ]
}
