def main(blob):
    counter = 0

    for word in blob.sentences.words:
        possible_words = word.spellcheck()
        if word != possible_words[0]:
            counter += 1

    return counter
