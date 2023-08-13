// plugins/freelancer-items.plugin.ts
var import_loggingInterop = require("@peacockproject/core/loggingInterop");
var import_contractRouting = require("@peacockproject/core/contracts/contractRouting");
var import_evergreen = require("@peacockproject/core/evergreen");
var persistentItems = [
  "c21f558b-2935-41e5-88ff-642eb1761ccc",
  "9fcf5400-0784-4e71-ad57-a3e17cf88bc3",
  "4ad2be0d-e24f-47a2-bcc9-4c6d5f73d4ff",
  "f91cf558-04a5-4fd8-8814-b1c765668b39",
  "33cadd6f-3813-4be1-8e50-bd6819cb9b13",
  "c4747fa2-4958-4a02-926e-3b069cf218dc",
  "6d4c88f3-9a09-453c-9a6e-a081f1136bf3",
  "0f9608e9-6e42-49b9-b4cd-9aaebba8458f",
  "c8a09c31-a53e-436f-8421-a4dc4115f633",
  "6dda9c11-d472-4ae9-aadc-b916881583a7",
  "f6657618-d723-419f-a71b-84d0e93402e3",
  "23b8ad17-1913-40ce-b3bc-2c92317801dd",
  "302a5fed-c166-46db-a5cb-5410eb052d29",
  "97f3ab46-e409-40dd-a0ba-8e9dd0b0345b",
  "851c8aee-3de2-48ea-ae16-667c8f180f2d",
  "87bf38ca-de63-4037-ae32-7817a42c7ced",
  "eedb7f84-896d-403b-905b-11b105e7ce35",
  "545ff36e-b43c-4a35-9ab3-680b23b9e354",
  "092f6514-c34e-4d04-8d28-7ebbe14230d1",
  "d75bef38-8a65-45f6-9cd1-ca5e23e2f79a",
  "6b93848c-8f1d-42eb-816f-bab61b56d8a5",
  "e206ed81-0559-4289-9fec-e6a3e9d4ee7c",
  "cdf9db81-14a9-4047-9c95-8a3e65cd6a00",
  "0e3dc26a-9eed-4aa1-b81e-d0c597b36737",
  "af2b1a36-a7f0-4003-aae4-a6076402542d",
  "2d0393e2-49a8-43c1-b8f3-110e4b0b0c83",
  "f417bfec-a999-4b2f-adef-510323c75ccf",
  "f93b99a3-aef6-419f-b303-59470577696d",
  "d8aa6eba-0cb7-4ed4-ab99-975f2793d731",
  "75a0d0de-fe3c-47d3-b64f-7fc446ee59c4",
  "494517eb-a6d1-4087-857a-37c8910703cf",
  "ed45f927-589d-4bad-ac1b-67e41c32e5ee",
  "907e0277-7806-42a4-b4b2-338cf8dd9391",
  "214004ec-5c86-4c26-8403-9e83a9bcdd24",
  "bbabd2bd-6e21-4b9b-a361-71bc255fc9b9",
  "f8f1acee-cb96-47a0-a969-4527251a713d",
  "256ac829-2ec6-44de-8d5f-16801a0491df",
  "370580fc-7fcf-47f8-b994-cebd279f69f9",
  "341ba426-d52d-4ae3-97a9-40b9b3633d76",
  "f5d0b800-bf37-41ff-bd19-4c04e3b69754",
  "d70c739a-6956-4771-ba9c-7f3c9206f762",
  "304a4180-46ce-43ac-af61-f54bbf8a75eb",
  "cd7587d0-4dff-4df6-b435-6080379acb01",
  "f2a74ebc-8f07-4845-b421-2339988e1994",
  "92330cd4-1bb1-419e-98d3-ef26631504bf",
  "e70adb5b-0646-4f88-bd4a-85bea7a2a654",
  "55ed7196-2303-4af6-9fa3-45b691134561",
  "21152383-6d79-436c-b359-0f8b4f5ed4a0",
  "ff340698-bc83-479c-8917-16d99b39406c",
  "ebff0c9a-e04d-4bc2-8f7a-e9c3cd6d6a93",
  "82642e14-c6d7-43b3-8b9c-396823a2859a",
  "7bf3a6e6-b5aa-4c88-b953-c2c378d36118",
  "d5728a0f-fe8d-4e2d-9350-03cf4243c98e",
  "e312a416-5b56-4cb5-8994-1d4bc82fbb84",
  "a15af673-8e21-47e3-bdfa-f5dea7b5f9e9",
  "fecf585b-4bdb-4a9b-9ab0-2bc44c6bd84a",
  "35efd6dc-0387-4b56-83f0-4e6609bac93f",
  "76d1f44c-8a78-462a-a39c-23d4101f4d6f",
  "482eca87-2340-43b2-bf8e-9f6dafb16b4c",
  "5631dace-7f4a-4df8-8e97-b47373b815ff",
  "ba102d90-b8c9-47b9-97eb-b462344b46c3",
  "0363daab-49c7-4a64-9b00-c871e550f61f",
  "4dee7cd6-f447-45af-a90e-c2e234386dc3",
  "f5e3a7ca-d0d3-421e-b341-b5ba46bc900f",
  "1e11fbea-cd51-48bf-8316-a050772d6135",
  "785c3c6b-1272-4853-94f0-a41d52f64795",
  "5c211971-235a-4856-9eea-fe890940f63a",
  "eca66732-a356-4c13-8e33-d0f7e87b5860",
  "1264f20b-b901-4d36-bc03-a9115709b531",
  "510c62c2-1f40-4a4d-9e42-da677bd116e7",
  "948811dd-5cf7-4f4b-9491-f1f94a000529",
  "e30a5b15-ce4d-41d5-a2a5-08dec9c4fe79",
  "8e445d94-9294-4087-af0d-178ef1f8c8f7",
  "d3dc2ef7-da65-4cdf-bf47-771aa5797ae0",
  "0f991e64-354a-403a-afa5-b30285889377",
  "1cae7d71-55c8-401a-9dfb-cd0909c4f6ee",
  "e55eb9a4-e79c-43c7-970b-79e94e7683b7",
  "a494c3c8-9a41-4398-9542-559e6a5dc1cb",
  "3dbd9ee9-f887-41bb-83bf-386324d11485",
  "4e66bf97-e6da-4cb6-b873-10a9af274bf4",
  "2953e9ac-e25b-41ae-afbf-4a47f86c4f54",
  "f5ebb935-9bec-422b-b772-37adc3ba23db",
  "6e4afb04-417e-4cfc-aaa2-43f3ecca9037",
  "16edb112-58cc-4069-a7dd-ebd258b14044",
  "3ec2d9e5-de9d-4ddc-969f-6f1565e5a291",
  "a8309099-1b89-4492-bf37-37d4312b6615",
  "3c52b8c3-f4a5-4fcd-ae16-ff45b56d4351",
  "f755f824-bdf6-4ace-b416-abf3bae4b6d5",
  "b8ec525e-8de3-4b9a-9b2a-97eb6a8dd9f6",
  "94f52181-b9ec-4363-baef-d53b4e424b74",
  "77ecaad6-652f-480d-b365-cdf90820a5ec",
  "e638b949-9b96-4c41-bec4-0a8fbfb05c75",
  "f2465b79-a901-42f9-93f5-22f114530849",
  "a2c56798-026f-4d0b-9480-de0d2525a119",
  "73875794-5a86-410e-84a4-1b5b2f7e5a54",
  "dd57a213-3e76-4a38-ba47-0ac5040ce5e4",
  "8a30c788-049a-4b83-b148-1a6db49d2ae5",
  "f124aaf2-3eb2-473f-9277-e68f09869974",
  "6e5e27bf-6c27-4785-8cc4-ffebd0ec3494",
  "41ac4076-e197-4576-894b-499534fd37e8",
  "2f6eec38-45ea-49df-83a2-0b98a858e60a",
  "d439fb64-8713-4c54-a3f3-90730dbdf370",
  "05ccbb96-a1a0-4ee5-9586-cb9d9c02085e",
  "be4e7b4e-d895-47c1-979d-d79bfbe79a02",
  "4404fc8d-ffc0-472d-a63a-6480be973e74",
  "081f8265-63db-4759-96a3-5186caf59f62",
  "1033c25d-3d57-4c15-b7d0-acf3b45665ef",
  "c61fea13-aaf0-4173-8fd0-9c34b43638ae",
  "e55c71d6-cbf6-41b8-8838-2d1be1d07e1c",
  "1a11a060-358c-4054-98ec-d3491af1d7c6",
  "613b24eb-fdc1-47a3-9157-e3d0c5464baf",
  "6eccc7e1-e31b-42de-8f84-b88d8e0032ea",
  "a5d19e9f-8ca3-4c51-9d79-15d3ea2e7771",
  "ef4c35c7-b7d4-4886-81b5-fda089f91173",
  "30ebff97-f1e8-4fb1-9414-3e0911c29149",
  "23e1031b-879d-4b04-ada9-b684d9d16c22",
  "1e2bc40b-505a-4cc6-a09c-94470470985b",
  "26605ee6-6e82-4a57-909f-76b91e7d93ed",
  "7e1b2364-a190-41f7-a16d-a7d7a9a2f623",
  "7373fafa-7adb-4c14-ac02-225895f9eb7f",
  "8598ae82-53ac-43ba-9f43-30140d6ba7ee",
  "e0de34ce-f8d1-428b-8b37-0dae7398bde3",
  "901a3b51-51a0-4236-bdf2-23d20696b358",
  "7f31d897-a62f-448c-be0d-79d565e2faa7",
  "226c2548-53e0-4703-873c-366e2c38dc5f",
  "62c2ac2e-329e-4648-822a-e45a29a93cd0",
  "c7296c5f-6c0e-4d52-98cd-e70a0d329e73",
  "935fd34c-e58c-45d3-bc66-3144752b001b",
  "f276fcc6-84a1-43c9-8d88-e7dd83a1ce58",
  "15291f69-88d0-4a8f-b31b-71605ba5ff38",
  "7d64d9df-5d30-4e98-9af0-7562ee145d5c",
  "034ce4ab-b85a-4706-bdef-cba77f9b45f7",
  "b58f4e9f-60b1-4bcb-bd87-b11dbcb8e6b2",
  "407df651-52d4-4871-a903-db677a7568ed",
  "9488fa1e-10e1-49c9-bb24-6635d2e5bd49",
  "304fd49f-0624-4691-8506-149a4b16808e",
  "b1cb79d7-9960-4d5c-8b43-81213c8594cd",
  "e82b61a6-c534-495a-bbe2-b45e9ae9a030",
  "d2a7fa04-2cac-45d8-b696-47c566bb95ff",
  "79b48d90-26aa-4b17-9332-599ed8e0bd7f",
  "3fd9825d-8aa5-48e0-97a9-ec8f541f871a",
  "03658b5a-b49e-4e82-82e2-f5d8c5cc602e",
  "f301f605-007c-4fe1-aa99-a8cd2cae033f"
];
var transientItems = [
  "2a493cf9-7cb1-4aad-b892-17abf8b329f4",
  "f16c9e93-3f04-4268-aafd-aa1fc187c181",
  "9278382c-9c73-4d0b-8be2-9cb151d3667c",
  "59e407df-c49b-4abe-a1be-0806b026e47e",
  "93f34bf9-2bd4-4aff-85c7-7e4a9921dfe7",
  "8afed6c5-a730-4f47-b02c-1e4608f2ae81",
  "67637973-ff21-4b00-88c3-304f8405dbb7",
  "49765e76-dea7-4ad4-b502-2bad7727a15f",
  "b26bb84e-8f15-4b4f-8554-52faa456cf2e",
  "b988422a-02a6-499e-b796-302a782be3d1",
  "67559fbc-0877-4b82-9b05-6fe0cf6d7b1c",
  "2bdf5016-e70b-4ac9-a3d5-f35b6743c09a",
  "1d4f5a7c-c0fb-4d66-9e77-35ae526ef83a",
  "293af6cc-dd8d-4641-b650-14cdfd00f1de",
  "b970a355-4296-4acc-9ec9-584e69a79eed",
  "7c691c03-7c6b-4eb4-9a68-898efe5eedaa",
  "d3387f28-866d-4262-88cb-6e5b1076bac0",
  "bbfeb648-7a9b-4fba-a5d4-7fdf84ad0017",
  "999e005f-d49f-4606-a929-6387bf511c72",
  "ecf7f361-c2aa-4d96-b66d-e973c3e87154",
  "7e52d861-481c-4f7c-87d2-6211d90586bf",
  "494e74b2-f3c0-4c77-be15-8f22a6eed97b",
  "0bc37bb7-dcd8-4348-a338-22fd8676a416",
  "6f935509-1e77-4991-baa4-d5515c20ab3e",
  "021ed731-eebc-400a-9658-8f6fc5af9da6",
  "ba5c5c48-3d2e-4d4d-9dbe-f57b95200b1a",
  "9aabe1cf-2a11-49d5-8baa-e8ed3ef22c3e",
  "74a22451-8920-488f-883c-b5246ba0f9f3",
  "808ebdcb-aafe-496a-9541-5903bf03c12e",
  "04812f8d-fa7c-43f8-9021-5f3587dbb2a9",
  "1c50d6e0-11c8-4cbc-be05-f51a8e5013be",
  "8431dd21-42ba-4da8-bfdb-6d870c9e1458",
  "b386cf6a-6a9b-4fb5-b879-4d55039d8ced",
  "1bfbb69d-c876-4d05-ab0b-f0be63b55b7a",
  "0209f0b7-f6de-45c2-a730-4802abe35a75",
  "7488229b-3fa8-4539-90ba-a7bf65798568",
  "c5ec6168-2e5e-4340-b71a-c60f2ee6bd66",
  "af9ad679-6a7c-4f8e-9700-ceb5e6887666",
  "261f1057-b1b2-4fe0-bd0d-b621102972c8",
  "8b114fce-586b-4b06-b446-75d0bb4a4cfb",
  "4c30021f-8ae4-4668-bf5d-1561b2e67d0b",
  "3f9cf03f-b84f-4419-b831-4704cff9775c",
  "5fed2bb2-4fe9-4613-9f21-fedc19ba5eb7",
  "407bf3c3-6319-4573-b193-2611b0ee397e",
  "fb1c7db4-2a41-4f3f-a17d-e93b205de481",
  "a02af9a5-aefb-47e0-9d67-51cc9ec89774",
  "736132de-78f3-4366-b927-ed9a401dbe26",
  "92d9acf6-fd79-4818-bda6-c4c28b123d8c",
  "765b2c7d-8554-463a-9ee4-de7b20822161",
  "c45e59f4-d8e1-4c37-b079-8b74b1fe9b24",
  "351c144c-8687-426a-a6f0-c4abd7021062",
  "6dadf34c-00f2-43f9-b4e8-6763502aa2c8",
  "8e77e2c5-caa6-45fe-8594-6a75c21569ec",
  "67b6eb96-89c6-43ce-ba7a-526b092a55f9",
  "3cf48e44-6e0f-4e4d-9d21-6a4af476118c",
  "4ca96340-ae60-427b-a011-9e296cd67fd9",
  "ee4dd67d-e80c-4d97-8ca8-f0d05dc3a698",
  "b9b0c5f2-41d1-4087-a57b-48a67731b699"
];
var evergreenId = "f8ec92c2-4fa2-471e-ae08-545480c746ee";
function initPlugin() {
  (0, import_loggingInterop.log)(import_loggingInterop.LogLevel.INFO, "[Freelancer Items] Loaded!", "freelancer-items");
  const getForPlay2 = import_contractRouting.contractRoutingRouter.stack.find(
    (e) => e.route.path === "/GetForPlay2"
  );
  const layer = getForPlay2.route.stack[getForPlay2.route.stack.length - 1];
  const originalHandle = layer.handle;
  layer.handle = async function(req, res) {
    if (req.body.id === evergreenId) {
      const cpd = await (0, import_evergreen.getCpd)(req.jwt.unique_name, evergreenId);
      cpd["PersistentItems"] = persistentItems;
      cpd["TransientItems"] = transientItems;
      (0, import_loggingInterop.log)(
        import_loggingInterop.LogLevel.INFO,
        "[Freelancer Items] Applied!",
        "freelancer-items"
      );
    }
    return await originalHandle(req, res);
  };
}
module.exports = initPlugin;
