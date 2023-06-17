export const ContractAddress = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8';
export const ContractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'timestamp',
        type: 'string',
      },
    ],
    name: 'message',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_message',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'time',
        type: 'string',
      },
    ],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
