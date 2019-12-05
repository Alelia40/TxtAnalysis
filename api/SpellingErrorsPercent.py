def main(blob):
    counter = 0
    word_count = blob.sentences.words.length

    for word in blob.sentences.words:
        possible_words = word.spellcheck()
        if word != possible_words[0]:
            counter += 1

    percent = counter / word_count * 100
    return percent
