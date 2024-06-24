/** Generate unique chat id for a sender - receiver pair */
export const GetChatRoomId = (from, to) => {
    const sortedContacts = [from, to].sort((a, b) => a - b)
    return sortedContacts.join('-')
}